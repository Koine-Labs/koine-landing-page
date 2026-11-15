/**
 * POST /api/waitlist — join the waitlist for one product.
 *
 * Body (JSON): { email, product: "mentat" | "annula" | "anchor", news: boolean, website: "" (hidden field), elapsed: ms }
 *
 * The address goes to Loops, the email service named in /privacy, and nowhere else. Nothing typed is logged.
 *
 * Settings (Vercel project → Settings → Environment Variables):
 * - LOOPS_API_KEY            required. Without it the endpoint answers 503 and the form says so.
 * - LOOPS_LIST_MENTAT, LOOPS_LIST_ANNULA, LOOPS_LIST_ANCHOR
 *                            optional. The ID of a Loops mailing list for each product. When set, a sign-up joins
 *                            that list, so each product's list can be emailed on its own.
 * - LOOPS_LIST_NEWS          optional. The list for lab news; joined only when the "news" box is ticked.
 */
import { cleanEmail, EMAIL_RE, looksAutomated, readJson, reply, tooMany } from "../../lib/forms";

const PRODUCTS = ["mentat", "annula", "anchor"] as const;
type Product = (typeof PRODUCTS)[number];
const LIST_VAR: Record<Product, string> = { mentat: "LOOPS_LIST_MENTAT", annula: "LOOPS_LIST_ANNULA", anchor: "LOOPS_LIST_ANCHOR" };
const FAILED = "That didn't go through on our side. Please try again in a moment, or write to team@koinelabs.com.";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (!body) return reply(400, { error: "Something was wrong with that request. Please try again." });

  const email = cleanEmail(body.email);
  if (!EMAIL_RE.test(email)) return reply(400, { error: "Enter an email address like name@example.com." });
  const product = PRODUCTS.find((p) => p === body.product);
  if (!product) return reply(400, { error: "Something was wrong with that request. Please reload the page and try again." });
  const news = body.news === true;

  if (tooMany(request, "waitlist", 8, 10 * 60_000)) {
    return reply(429, { error: "Too many sign-ups from here in a short time. Please try again in a few minutes." });
  }
  if (looksAutomated(body, 1500)) return reply(200, { ok: true });   // answer as usual, keep nothing

  const key = process.env.LOOPS_API_KEY;
  if (!key) {
    console.error("[waitlist] LOOPS_API_KEY is not set");
    return reply(503, { error: "Sign-ups are not open on this server yet. Please write to team@koinelabs.com." });
  }

  const lists: Record<string, boolean> = {};
  const productList = process.env[LIST_VAR[product]];
  if (productList) lists[productList] = true;
  if (news && process.env.LOOPS_LIST_NEWS) lists[process.env.LOOPS_LIST_NEWS] = true;

  try {
    const res = await fetch("https://app.loops.so/api/v1/contacts/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        email,
        source: `koinelabs.com, ${product}`,
        userGroup: "Waitlist",
        // "subscribed" is left alone on purpose: anyone can type any address here, so a sign-up never undoes an
        // earlier unsubscribe. New contacts start subscribed.
        ...(Object.keys(lists).length ? { mailingLists: lists } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[waitlist] Loops answered ${res.status}`);
      return reply(502, { error: FAILED });
    }
  } catch (err) {
    console.error("[waitlist] could not reach Loops:", err instanceof Error ? err.name : "error");
    return reply(502, { error: FAILED });
  }

  console.log(`[waitlist] sign-up for ${product}${news ? ", with lab news" : ""}`);
  return reply(200, { ok: true });
}
