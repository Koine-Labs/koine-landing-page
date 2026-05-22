import { NextResponse } from "next/server";

/**
 * Waitlist signup endpoint.
 *
 * Behavior:
 * - Always validates and logs the email to Vercel function logs.
 * - If LOOPS_API_KEY is set, upserts the contact into Loops under the
 *   "Waitlist" user group so the list is reviewable + emailable from
 *   the Loops dashboard. Duplicates are handled gracefully (upsert).
 *
 * To enable Loops sync:
 * 1. Sign up at https://loops.so (free up to 1,000 contacts).
 * 2. Settings → API → create a key.
 * 3. Add LOOPS_API_KEY to your Vercel project env vars.
 *
 * Until then, signups are visible in Vercel logs under
 * Functions → api/waitlist.
 */

const LOOPS_ENDPOINT = "https://app.loops.so/api/v1/contacts/update";

export async function POST(request: Request) {
  let email: string;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // basic email sanity check
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // always log — appears in Vercel function logs
  console.log(`[waitlist] signup: ${email}`);

  // optional sync to Loops (upsert — handles duplicates by design)
  if (process.env.LOOPS_API_KEY) {
    try {
      const res = await fetch(LOOPS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          source: "Koine Labs website",
          userGroup: "Waitlist",
          subscribed: true,
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[waitlist] loops api error:", res.status, text);
      }
    } catch (err) {
      console.error("[waitlist] loops sync failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
