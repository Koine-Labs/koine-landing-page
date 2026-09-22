# Public claim audit

**Status: proposed, awaiting owner review (prepared 2026-09-22 during the workspace renewal).** Nothing on the site has been changed. Each claim the site (or its unpublished prototypes) makes is checked against the evidence in the Koine Labs project it concerns. Paths to other projects are relative to the Koine Labs workspace root (`../` from this repository); `page.tsx` etc. are this repository's `app/` files.

Supported levels: **research** (a hypothesis or study), **prototype** (built, single-user, not offered to anyone), **product** (offered to others), **fictional** (illustrative UI), **none** (no supporting evidence).

Legend. `live` = tracked Next source (deployment status unknown). `v2`/`v3` = untracked, noindex prototypes. The supported level is what the project's own evidence supports.

| # | Claim | Page/file | Project | Supported level | Evidence | Wording direction |
|---|---|---|---|---|---|---|
| 1 | "An AI that knows how you feel before you do" | `page.tsx:282-288`; `layout.tsx:28-30`; OG image | daybook | research hypothesis | `daybook/docs/STATUS.md:7-35` (JEPA 10%, loops unfed) | Pose it as an open question ("exploring whether chosen signals can…"). Drop "before you do". Adopt v3's "sensing a state is not reading a mind". |
| 2 | "Continuous read… across waking and dreaming, from brain, audio, visual, heart, and body" | `page.tsx:289-293,322-325,491`; `emails/welcome.html:73` | daybook | research/early prototype (mic live boot; BCI scaffold; sleep untested) | `daybook/docs/STATUS.md`:26-35; `capabilities.yaml:112` | Name what exists (mic, self-report, EXG experiments). Present sleep and dream as long-horizon research. |
| 3 | "Daybook is the software", "01 · Product", "Meet Daybook" | `page.tsx:13,317-319` | daybook | prototype | `daybook/README.md:3-8` ("always-on AI empath prototype") | "Research prototype", not "product". |
| 4 | "Koine Wisp is the wearable instrument we're building to feed it… Wisp is in prototype" | `page.tsx:14-16` | wisp / daybook | **none** for a Daybook sensing wearable | `Wisp/README.md:3,33`; `daybook/CLAUDE.md:19` ("custom wearable later"); Daybook's `apps/wisp` is the Regis persona (`daybook/README.md:15`) | Remove, or rename and disambiguate. If Wisp is shown, describe the silent-articulation and refit-robustness question with its external-data baseline (46.25%/26.00% held-out-day, SilentWear, not the user's hardware). |
| 5 | "Empath AI prototype paired with our first ambient wearable… Both in active build" | `page.tsx:540-547` | daybook + wisp | Daybook prototype; wearable proposed | `Wisp/docs/headset-concept.md:3` (unverified concept, 2026-09-12) | "Daybook: prototype. Wearable form: concept/research; no device in build." |
| 6 | Device mock: "Cohort 01 — Sess 0184", "Koine Wisp · paired", "on-device · private" | `page.tsx:335-336,479-483` | daybook | fictional | `privacy/page.tsx:23` (pre-launch) | Label "Illustrative UI · fictional", as v2/v3 do. |
| 7 | "Daybook also pairs with existing consumer biosignal hardware" | `page.tsx:15-16` | daybook | partial source | `daybook/apps/api/routes/state.py:1-3` (HealthKit ingest route); iOS/Watch clients removed (`daybook/README.md:22-24`) | "Can ingest some consumer health data in development", or drop. |
| 8 | "The AI already knows what kind of day you're having and acts on it" | `page.tsx:24-26` | daybook | research | `daybook/docs/STATUS.md`:24-35 (learning loops unfed) | Conditional/aspirational tense. |
| 9 | "Inference is on-device wherever possible; raw signals never leave without granular consent"; per-signal consent | `page.tsx:33-35`; `data-ethics:45-66` | daybook | design intent (local MacBook hub) | `daybook/README.md:4-6`; consent mechanism: unknown | Present as a commitment ("we will"), consistent with privacy:67-71. |
| 10 | "Give humanity back one third of its life"; dream interface | `page.tsx:503-512,40-47` | lab / daybook | speculative research (already hedged: "not promised") | `daybook/CLAUDE.md:21` (sleep wedge deferred) | Keep the hedge. Use v3's "sleep and dream interfaces remain separate, speculative research". |
| 11 | "Our revenue comes directly from people who use Daybook and Koine Wisp" | `data-ethics:72-74` | lab | none (pre-launch) | privacy:23 | Future tense ("will come"). |
| 12 | "Just your email… no third-party analytics" | `privacy:31-40` | website | partially true | `route.ts:41,44-58` | Disclose the host, Loops and email logging. Set log retention to match the host. |
| 13 | "Infrastructure currently runs in the United States" | `privacy:124` | website | unknown | no region config in repo | Verify with the host before keeping. |
| 14 | "Pre-launch; neither Daybook nor Koine Wisp are shipping" | `privacy:23` | lab | accurate | — | Keep (update the Wisp naming). |
| 15 | "Bubble is our flagship software prototype" / "Bubble P1 is our first integrated prototype objective… some foundations exist" | v2 §02; v3 §02 | bubble | prototype (supported) | `bubble/README.md:1-16`; `CURRENT_TO_TARGET.md:102-437` ("implemented in development branch; deployment not implied"), `:504` (P1 gated) | Keep. This is the model register for the rewrite. |
| 16 | "Mesherra: identities, scoped disclosure, permitted exchanges and evidence of what was accepted"; "two-person Bubble experience remains a prototype objective" | v3 chapter 05 + research card | mesherra-protocol / bubble | research/pre-alpha implementation | `mesherra/README.md:159-169` (**uncommitted working-tree edit**: pre-alpha, not production-ready) | Keep. Optionally add "pre-alpha; not production-hardened". Keep it distinct from the Card Reader world layer. |
| 17 | "Daybook: the waking-context research track… sensing is not reading a mind" | v2/v3 research cards | daybook | research/prototype | `daybook/README.md:3-8` | Keep. It should replace the live hero framing. |
| 18 | "Querent… Loom… TRAS explores learning dynamics in controlled worlds" | v3 `index.html:78` | tras (+ non-registry names) | TRAS research; Querent/Loom unknown | `TRAS/README.md:1-4`. Querent/Loom appear only in Bubble's untracked private Atlas sources, not in any registry repo. | Keep TRAS. Decide whether to name non-registry work publicly. |
| 19 | "A wearable, a desk companion, or another physical form could…" | v3 `site.js:29` (horizon "Beyond") | lab / wisp | proposed | `Wisp/docs/headset-concept.md` | Keep the hedge. If Wisp is named, specify silent articulation. |

## Copy proposal (direction, not final text)

- Present Koine Labs as a research studio with prototypes, not a shipping product: the unpublished `design-prototypes/public-v3` register ("sensing a state is not reading a mind"; "Bubble P1 is our first integrated prototype objective… some foundations exist") is the model.
- Remove or rename "Koine Wisp". If Wisp appears, describe the silent-articulation, refit-robustness question and its external-data baseline — not a Daybook-paired biosignal wearable.
- Relabel every illustrative device/UI mock as fictional; move revenue and five-signal statements to future or conditional tense.
- Privacy page: name the host and Loops as processors and say that waitlist emails appear in function logs; verify the infrastructure region with the host before stating it.

Integration into the Next app, accessibility and device performance review, and publication are separate, owner-authorized steps.
