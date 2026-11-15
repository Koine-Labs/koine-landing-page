# Koine Labs website

The public site for Koine Labs, served at `https://www.koinelabs.com` (the bare domain redirects there). A Next.js 16 App Router app, hosted on Vercel (project `koine-labs-website`).

**Branch `site-relaunch` (not yet published):** the new site. A short homepage for investors, partners and anyone looking the lab up, one page per product (Mentat, Annula, Anchor), About, Notebook and Contact, waitlist sign-up on each product page, a contact form, cookieless visitor statistics, and the policy pages. Its pages were ported on 14 Nov 2026 from the approved prototype in the untracked `design-prototypes/public-v10/`; edit the TSX in `app/` from now on.
**`main` (live today):** the earlier "Ambient AI" site about Daybook and Koine Wisp.

## Pages

| Route | What it is |
|---|---|
| `/` | North Star, then one door per product |
| `/mentat`, `/annula`, `/anchor` | Product pages: what we are trying to do, what it is today, how it helps you, what we want to build, where it is going, then a waitlist form |
| `/about`, `/notebook` | The North Star, the missions and the name; the notebook, with the essays in preparation |
| `/contact` | The contact form, and the email address |
| `/privacy`, `/terms`, `/data-ethics`, `/accessibility`, `/security` | Policies. The date they show is `POLICIES_UPDATED` in `app/lib/site.ts`; change it whenever one of them changes |
| `/.well-known/security.txt` | Security contact for automated tools (expires 2027-11-14; renew it before then) |

**The header** (`app/components/SiteNav.tsx`): the three products are always shown. "The lab" sits at the right-hand end, and About, Notebook and Contact have a place between the two that stays empty until "The lab" is hovered, clicked, or opened with Enter from the keyboard; a rule then sweeps across and uncovers them in about a sixth of a second, and nothing else in the row moves. It closes on Escape or when focus leaves. (A first version slid the whole row sideways and took half a second; the owner found it slow and uneasy.) On devices that cannot hover they are simply shown. When the row would not fit with the links unfolded, the same list opens from a Menu button instead. The owner chose "Notebook" over "Essays" and does not want the word "Products" in the navigation.

Shared facts (site address, email, navigation, product names) are in `app/lib/site.ts`. Styles are in `app/globals.css`. Pictures are in `public/assets/`, sharing cards in `public/og/`.

## Forms

Both form endpoints check input on the server, ignore a hidden honeypot field and too-fast submissions, limit how often one address can post (in memory, per server instance), and never log what people type.

- **Waitlist** — `app/api/waitlist/route.ts` adds the address to Loops with user group "Waitlist" and the source `koinelabs.com, <product>`. It never re-subscribes an address that unsubscribed.
- **Contact** — `app/api/contact/route.ts` sends the message to the lab's inbox as a Loops transactional email. It does not store the message or add the sender to any list. When it is not configured it answers 503, and the form offers to send the same message from the visitor's email app.

Environment variables (Vercel → Settings → Environment Variables):

| Name | Needed for | Status on 14 Nov 2026 |
|---|---|---|
| `LOOPS_API_KEY` | both forms | set for Production and Preview |
| `LOOPS_CONTACT_TRANSACTIONAL_ID` | contact form | not set. Create a transactional email in Loops whose body uses the data variables `name`, `email`, `topic` and `message`, then set its ID here |
| `CONTACT_INBOX` | contact form, optional | defaults to `team@koinelabs.com` |
| `LOOPS_LIST_MENTAT`, `LOOPS_LIST_ANNULA`, `LOOPS_LIST_ANCHOR`, `LOOPS_LIST_NEWS` | optional | not set. Loops mailing-list IDs, so each product (and lab news) can be emailed separately |

## Visitor statistics

Vercel Web Analytics (`@vercel/analytics`), loaded only on production deployments (`VERCEL_ENV=production`). It sets no cookies and stores no IP addresses. `app/components/SiteAnalytics.tsx` sends nothing when the browser has Global Privacy Control or Do Not Track on, and strips query strings and fragments from page addresses. The forms record "Sign-up" (with the product) and "Contact message" (with the topic) as custom events, never an address; custom events need a Vercel Pro plan. **Web Analytics must be enabled once in the Vercel project (Analytics tab)**; until then the script request 404s.

## Security headers

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS, and, on production builds, a Content Security Policy limited to this origin.

## Safe development path

1. Dependencies: `npm ci`.
2. Dev server with telemetry off, on a free port (3000 is taken by something else on this machine): `NEXT_TELEMETRY_DISABLED=1 ./node_modules/.bin/next dev -p <free-port>`.
3. **Do not submit the forms against a server that has `.env.local`**: with `LOOPS_API_KEY` set they write to the real Loops account. To test the forms, build a copy without `.env*` (below); there the endpoints answer 503 and nothing is sent.
4. Typecheck: `./node_modules/.bin/next typegen && ./node_modules/.bin/tsc --noEmit`.
5. Build in a separate copy, never beside a running dev server: `rsync -a --exclude '.env*' --exclude .git --exclude node_modules --exclude design-prototypes --exclude .next ./ <copy>/`, then `cp -Rc node_modules <copy>/` (Turbopack rejects a symlinked `node_modules`), then `next build` and `next start -p <free-port>` there.
6. `npm run lint` is dead: `next lint` was removed in Next 16.
7. `.env.local` is private; never stage it.

## Tested vs observed

| Evidence | Level | Date |
|---|---|---|
| `tsc --noEmit` clean; `next build` (Next 16.4.6) clean, no warnings; `npm audit --omit=dev` finds 0 vulnerabilities | locally tested | 2026-11-14 |
| `next start`: every route 200, unknown path 404 with its own title and `noindex`; robots, sitemap, security.txt, icons and sharing cards served; security headers present | locally tested | 2026-11-14 |
| Headless Chrome at 1440 px and 390 px: one `h1` per page, no skipped heading levels, no duplicate ids, every image has `alt`, no sideways overflow, no console errors or content-policy violations | locally tested | 2026-11-14 |
| Forms in headless Chrome: errors after leaving a field, cleared while fixing, empty submit focuses the first problem; endpoints refuse bad input (400), drop honeypot and too-fast posts, rate-limit (429), and answer 503 without keys | locally tested | 2026-11-14 |
| Forms delivering to Loops; analytics recording; Safari, Firefox, real phones | not tested | — |
| Live on koinelabs.com | `main` only (the old site); this branch is not deployed | — |

## Before publishing

- The owner's review of the copy and the policy pages.
- Done, 14 Nov 2026: the owner reviewed the six app screenshots (Anchor: Today, Calendar, This week; Annula: Account, Desk, Watchlist) and approved them for the public site and this public repository.
- The old privacy policy promised waitlist members 30 days' email notice of material changes, and "no third-party analytics". This branch changes both, so existing waitlist members should be emailed before it goes live.
- Marketing emails from Loops must carry a physical postal address (US CAN-SPAM); set one in Loops.
- `emails/welcome.html` still describes Daybook and Koine Wisp; no code sends it.
- `docs/claim-audit.md` audits the old site's claims, not this branch's.
- Publishing means merging into `main`, which Vercel deploys.
