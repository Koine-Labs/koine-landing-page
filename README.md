# Koine Labs website

The public site for Koine Labs (`https://koinelabs.com`, set in `app/layout.tsx`): a Next.js 16 App Router app with a landing page (`app/page.tsx`), legal pages (`/privacy`, `/terms`, `/data-ethics`), `robots.txt`, `sitemap.xml`, a generated Open Graph image, and a waitlist endpoint (`POST /api/waitlist`).

**Current public positioning (tracked source):** "Ambient AI" — Daybook presented as the product and "Koine Wisp" as a biosignal wearable.
**Proposed positioning (untracked `design-prototypes/`, unpublished, `noindex`):** a research studio first, with Bubble as the flagship prototype and Daybook and Mesherra as research tracks.
Neither is approved; the [claim audit](docs/claim-audit.md) checks every public claim against project evidence.

**Who uses it:** public visitors and waitlist signups; the owner, who maintains the site and approves copy; design reviewers opening the standalone prototype previews.

## What is implemented

- **Waitlist** — `app/api/waitlist/route.ts` validates an email and logs it to the host's function logs; if `LOOPS_API_KEY` is set it also upserts the contact into Loops (group "Waitlist"). The privacy page currently names neither.
- **No analytics** — no analytics or tracking scripts.
- **Welcome email** — `emails/welcome.html` exists; no code sends it.
- **Design prototypes** — `design-prototypes/public-v2/` (editorial) and `public-v3/` (spatial WebGL; loads its hero image from `public-v2`, so keep them together). Self-contained HTML previews with their own build and check scripts; not integrated or deployed.

## Tested vs observed

| Evidence | Level | Date |
|---|---|---|
| Isolated `next build` succeeds (9 routes); `next typegen && tsc --noEmit` clean; `next start` on a spare port serves every page and internal link with 200 (unknown path 404) | locally tested | 2026-09-22 |
| Prototype browser checks (widths, JS errors, requests) per `design-prototypes/public-v{2,3}/README.md` | locally tested (untracked reports) | 2026-09-04 |
| Live on koinelabs.com and auto-deployed from `main` | unknown — no `.vercel/` or `vercel.json` here | — |
| Committed tests / CI | none | — |

## Safe development path

1. Dependencies: `npm ci` (lockfile-exact). The install was repaired on 2026-09-22 after an earlier folder copy left `node_modules/next/dist` missing.
2. Dev server with telemetry off, on a free port (3000 is taken by something else on this machine):
   ```sh
   NEXT_TELEMETRY_DISABLED=1 ./node_modules/.bin/next dev -p <free-port>
   ```
3. **Never submit the waitlist form locally** — it logs the address and may write to Loops if `.env.local` configures it.
4. Typecheck: `./node_modules/.bin/next typegen && ./node_modules/.bin/tsc --noEmit`.
5. Build (`npm run build`) needs network for Google Fonts and overwrites `.next/`; build in a separate copy, never beside a running dev server. Turbopack rejects a symlinked `node_modules` in such a copy — clone it (`cp -Rc`).
6. `npm run lint` is dead: `next lint` was removed in Next 16. Migrating to the ESLint CLI (codemod `next-lint-to-eslint-cli`) needs network and new dependencies — deferred.
7. Prototypes: `node design-prototypes/public-v{2,3}/build.mjs` regenerates the standalone previews; `check.mjs` needs Playwright and Chrome and overwrites `review/`.
8. `.env.local` is private; never stage it. The stale `.next/` from an earlier location is a disposable cache.

## Authoritative documents

- **Public claims:** the tracked source in `app/` and `emails/` — nothing else.
- **Claim review:** [`docs/claim-audit.md`](docs/claim-audit.md) (proposed).
- **Proposed direction:** `design-prototypes/public-v2/README.md`, `design-prototypes/public-v3/README.md` (untracked).
- **History:** the superseded v0.2 "Phosphene" spec/plan and the 2026-05-21 design handoff bundle this site implements are in the Koine Labs workspace `archive/koine-labs-website/` (see its `archive/INDEX.md`).

## Unresolved

- **"Koine Wisp"** collides with the Wisp silent-articulation experiment and with Daybook's Regis/wisp persona; no sensing wearable or cohort exists.
- **Claim audit** — hero, five-signal, on-device and revenue statements need research/prototype/product labels (owner decision).
- **Privacy page** — processors (host, Loops) and email logging are undisclosed; infrastructure region and hosting linkage are unknown.
- **Prototype tracking** — whether `design-prototypes/` is committed, ignored or archived; its README warns against publication and this repository has a GitHub remote.

## Next milestone

A reviewed public narrative that reflects the portfolio without overstating delivery or research results. Proof: an owner-approved claim audit, a local copy proposal fixing every unsupported claim, and an updated processor disclosure. Integration into the app, device/accessibility review and deployment are separately authorized follow-ons.
