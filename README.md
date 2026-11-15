# Koine Labs website

The public site for Koine Labs, served at `https://www.koinelabs.com` (the bare domain redirects there). A Next.js 16 App Router app, hosted on Vercel (project `koine-labs-website`).

**Live since 15 Nov 2026 (`main`):** a short homepage for investors, partners and anyone looking the lab up, one page per product (Mentat, Annula, Anchor), About, Notebook and Contact, waitlist sign-up on each product page, a contact form, cookieless visitor statistics, and the policy pages. It replaced the earlier "Ambient AI" site about Daybook and Koine Wisp. The pages were ported on 14 Nov 2026 from an approved prototype; edit the TSX in `app/`.
**Branch `site-relaunch`:** where the new site was built. It equals `main` at publication. Vercel builds a sign-in-protected preview of any branch that is pushed.

**Who operates it:** Koine Labs is a research lab within The House of Agrawal LLC, which is the legal entity named in the footer, the privacy policy and the terms. The owner does not want a personal name anywhere on the site (decided 15 Nov 2026).

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
| `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, `NEXT_PUBLIC_POSTHOG_HOST` | visitor statistics | set for Production and Preview on 15 Nov 2026. Both are needed; without them no statistics run. The token is the PostHog project's public token (`phc_…`), which is meant to be visible in page code and can only send events; the host is `https://us.i.posthog.com`. They are read at build time, so redeploy after changing them |

## Visitor statistics

PostHog (`posthog-js`), in its cookieless mode. The owner asked for PostHog on 15 Nov 2026. It took the place of Vercel Web Analytics, so the site has one statistics tool and one disclosure.

- **Where it starts:** `instrumentation-client.ts`, and only when both PostHog variables above are set, the browser has not sent Global Privacy Control or Do Not Track, and the page has finished loading. The library is a separate file loaded at that point, so it never delays the page. Settings are in `app/lib/posthog.ts`.
- **What it sends:** page views (also when moving between pages without a reload), page leaves with time on page and scroll depth, clicks on links and buttons, and two events from the forms through `track()` in `app/lib/analytics.ts`: `waitlist_joined` (product, and whether lab news was ticked) and `contact_message_sent` (topic). Never an address or anything typed.
- **What it does not do:** it stores nothing in the browser (no cookies, no local or session storage), builds no person profiles, and has session recording, heatmaps, surveys, feature flags, and error and performance capture switched off. Everything after `?` or `#` is cut from every address before sending; campaign labels (`utm_*`) are kept as separate fields, and advertising click identifiers (`gclid`, `fbclid` and the like) are dropped. No script is loaded from PostHog, and it is the only outside host the content policy lets a page contact.
- **No reverse proxy, on purpose.** PostHog recommends one so that tracking blockers do not stop the events. This site sends straight to PostHog, so a visitor who blocks trackers is not counted.
- **The PostHog project must stay set up to match `/privacy`:** *Cookieless tracking* on (Settings → Web analytics; without it PostHog discards every event this site sends) and *Discard client IP data* on, the GeoIP transformation off (Data pipelines → Transformations), and session replay off. `/privacy` says no IP address is kept and no location is worked out from it. The project is "Koine Labs website" in the PostHog organisation "Koine Labs" (US cloud), created and set this way on 15 Nov 2026.
- **Previews are counted too**, because the variables are also set for Preview. Their events carry a `vercel.app` host, and the project's "filter out internal and test users" setting hides them (and `localhost`) by default.
- **PostHog drops events from browsers that look automated**, so a headless test browser must send an ordinary user agent to be counted.
- **Use a PostHog project of its own.** Never send this site's visits to a project that another site or app already uses: the two sets of data would mix, and the settings above apply to a whole project.
- Change `app/lib/posthog.ts` and the "Visitor statistics" paragraph of `/privacy` together.

## Security headers

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS, and, on production builds, a Content Security Policy limited to this origin, plus the PostHog host for outgoing statistics when a PostHog project is set.

## Scrolling between pages

Two things keep a newly opened page at its top, and both are needed with Next 16.4 or later:

- `scroll-padding-top` on `html` (`app/globals.css`) must stay a little less than the header's height. Next treats the top of a new page as hidden when it sits above that line, and scrolls.
- `<html data-scroll-behavior="smooth">` (`app/layout.tsx`) lets Next switch smooth scrolling off while it changes page. Without it the scroll to the top is animated and ends in the wrong place.

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
| Statistics against a local stand-in for PostHog, in headless Chrome: page views, page leaves, link and button clicks and `waitlist_joined` arrive; no cookie, local storage or session storage is written; a visit to `/?utm_source=…&gclid=…&q=…#…` sends no query string, fragment or click identifier and keeps `utm_source`; the typed email address is never sent; no request goes to any other host; with Global Privacy Control on, the library is not loaded and nothing is sent; with no PostHog variables, nothing is sent | locally tested | 2026-11-15 |
| Vercel preview of this branch (commit `a5a1456`): every page 200, unknown path 404, pictures, robots, sitemap and security.txt served, security headers present, waitlist endpoint refuses an empty post | runtime verified, by HTTP only | 2026-11-14 |
| Preview with the PostHog project connected, visited in headless Chrome: 11 events arrived in PostHog (page views, page leaves with scroll depth, two button clicks, `waitlist_joined`); stored with a hashed daily visitor id and one session id; no IP address, user agent or location stored; `utm_source` kept, query string and click identifier absent; nothing written to cookies or browser storage | runtime verified | 2026-11-15 |
| Preview in Safari's engine (Playwright WebKit 27.2) at desktop size and as an iPhone: all 12 pages (one `h1`, no sideways overflow, pictures loaded), the header by hover, click, Enter and Escape, the Menu button and its six links, both forms' checks and answers, statistics sent and nothing stored. Form endpoints and PostHog were answered by the test, so nothing real was sent | runtime verified | 2026-11-15 |
| Preview in Safari on an iPhone 17 simulator (iOS 27.0): home page, Menu, and a move to `/anchor` look right | device verified (simulator, not a physical phone) | 2026-11-15 |
| One real waitlist sign-up through the preview's `/api/waitlist` answered 200, which the endpoint only does when Loops accepted the contact; `/api/contact` answered 503 with the email fallback, as expected without the template | runtime verified | 2026-11-15 |
| After a move from one page to another the new page starts at its top (it used to land 35 px down, hiding the breadcrumb), and in-page jumps land clear of the header; measured in WebKit at both sizes | runtime verified | 2026-11-15 |
| Firefox | not tested: Playwright's Firefox build does not start on this macOS version. Read from the code instead: every newer CSS feature in use has a fallback or is ignored harmlessly (anchor positioning has a fixed fallback, the popover menu has a class fallback) | — |
| Live on `www.koinelabs.com` (commit `d101fb3`): bare domain redirects to `www`; every page 200, unknown path 404; robots, sitemap, security.txt, manifest, icons and sharing card served; security headers and content policy present; both endpoints refuse bad input; the Safari-engine suite passes at both sizes | runtime verified | 2026-11-15 |
| One real visit to the live site in Chrome: page views, clicks and page leaves stored in PostHog under `www.koinelabs.com`, with no IP address or location, and nothing written to the browser | runtime verified | 2026-11-15 |
| A physical phone; the contact form delivering through Loops | not tested | — |

## Open after publishing

- Done, 14 Nov 2026: the owner reviewed the six app screenshots (Anchor: Today, Calendar, This week; Annula: Account, Desk, Watchlist) and approved them for the public site and this public repository.
- Done, 15 Nov 2026: the owner accepted the policy pages as drafted, and said there is no existing waitlist, so nobody needs notice of the new privacy policy. The privacy policy was then changed to name PostHog instead of Vercel for visitor statistics.
- Done, 15 Nov 2026: the PostHog project exists, is set up as described under "Visitor statistics", and its token and host are in Vercel.
- `/privacy` says PostHog acts under a contract. PostHog's data processing agreement for the "Koine Labs" organisation was generated on 15 Nov 2026 (PostHog → Legal documents) and sent to `team@koinelabs.com` for signature. It takes effect when the owner signs it from that email; until then its status in PostHog is "Awaiting signature".
- `/privacy` says statistics are kept for up to one year, which is PostHog's free-plan retention. Change that line if the plan changes.
- Contact form: create the Loops transactional email and set `LOOPS_CONTACT_TRANSACTIONAL_ID`. Until then the form offers to send the message from the visitor's email app.
- Marketing emails from Loops must carry a physical postal address (US CAN-SPAM); set one in Loops before the first one is sent.
- `emails/welcome.html` still describes Daybook and Koine Wisp; no code sends it. Check that Loops has no automation that sends it when a contact is added.
- `docs/claim-audit.md` audits the old site's claims, not this branch's.
- Any push to `main` deploys to the live site.
