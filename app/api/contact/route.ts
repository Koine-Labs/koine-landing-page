/**
 * POST /api/contact — a message from the contact page, delivered to the lab's inbox as an email.
 *
 * Body (JSON): { name, email, topic, message, website: "" (hidden field), elapsed: ms }
 *
 * The message is sent once, through a Loops transactional email, and is not stored by this site. The sender is not
 * added to any mailing list. Nothing typed is logged.
 *
 * Settings (Vercel project → Settings → Environment Variables):
 * - LOOPS_API_KEY                    required.
 * - LOOPS_CONTACT_TRANSACTIONAL_ID   required. The ID of a transactional email in Loops whose body uses the data
 *                                    variables name, email, topic and message.
 * - CONTACT_INBOX                    optional. Where messages go; team@koinelabs.com if not set.
 * Without the two required settings the endpoint answers 503 with { fallback: "mailto" }, and the form offers to send
 * the same message from the visitor's own email app instead.
 */
import { cleanEmail, cleanText, EMAIL_RE, looksAutomated, readJson, reply, tooMany } from "../../lib/forms";

const TOPICS: Record<string, string> = {
  invest: "Investing or partnering",
  press: "Press",
  product: "One of our products",
  other: "Something else",
};
const FAILED = "That didn't go through on our side. Please try again in a moment, or write to team@koinelabs.com.";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (!body) return reply(400, { error: "Something was wrong with that request. Please try again." });

  const email = cleanEmail(body.email);
  const name = cleanText(body.name, 120);
  const message = cleanText(body.message, 5000);
  const topic = typeof body.topic === "string" ? TOPICS[body.topic] : undefined;
  if (!EMAIL_RE.test(email)) return reply(400, { error: "Enter an email address like name@example.com." });
  if (!topic) return reply(400, { error: "Choose what your message is about." });
  if (message.length < 10) return reply(400, { error: "Write a little more: at least 10 characters." });

  if (tooMany(request, "contact", 5, 10 * 60_000)) {
    return reply(429, { error: "Too many messages from here in a short time. Please try again in a few minutes." });
  }
  if (looksAutomated(body, 3000)) return reply(200, { ok: true });   // answer as usual, send nothing

  const key = process.env.LOOPS_API_KEY;
  const template = process.env.LOOPS_CONTACT_TRANSACTIONAL_ID;
  if (!key || !template) {
    console.error("[contact] the contact form is not configured (LOOPS_API_KEY or LOOPS_CONTACT_TRANSACTIONAL_ID)");
    return reply(503, { error: "The form is not connected yet.", fallback: "mailto" });
  }

  try {
    const res = await fetch("https://app.loops.so/api/v1/transactional", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        transactionalId: template,
        email: process.env.CONTACT_INBOX || "team@koinelabs.com",
        addToAudience: false,
        dataVariables: { name: name || "(not given)", email, topic, message },
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`[contact] Loops answered ${res.status}`);
      return reply(502, { error: FAILED });
    }
  } catch (err) {
    console.error("[contact] could not reach Loops:", err instanceof Error ? err.name : "error");
    return reply(502, { error: FAILED });
  }

  console.log(`[contact] message about: ${topic}`);
  return reply(200, { ok: true });
}
