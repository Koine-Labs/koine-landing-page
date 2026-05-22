"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { FieldCanvas } from "./components/FieldCanvas";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";

const FAQ_ITEMS: Array<{ q: React.ReactNode; a: React.ReactNode }> = [
  {
    q: "Is Koine a device, or software?",
    a: (
      <>
        Both. Koine Labs is the company. <em>Daybook</em> is the software — the
        read of your inner state. <em>Koine Wisp</em> is the wearable instrument
        we&apos;re building to feed it. For now, Daybook also pairs with
        existing consumer biosignal hardware while Wisp is in prototype.
      </>
    ),
  },
  {
    q: "How is this different from a mood tracker?",
    a: (
      <>
        A mood tracker asks. Daybook listens. The AI already knows what kind of
        day you&apos;re having and acts on it gently, in the background.
      </>
    ),
  },
  {
    q: "What about my privacy?",
    a: (
      <>
        Biosignals are the most intimate data a person can produce. Inference is
        on-device wherever possible. Your raw signals never leave without
        explicit, granular consent.
      </>
    ),
  },
  {
    q: "A dream interface — really?",
    a: (
      <>
        Really. Not soon, not easy, not promised. But the trend lines on
        consumer neural sensors are clear, and there is no reason a third of a
        human life should remain offline forever.
      </>
    ),
  },
  {
    q: "Who is this for?",
    a: (
      <>
        Initially: people who already meditate, journal, track their sleep, and
        feel the layer between them and their tools is too thin. Eventually:
        everyone who has wanted software to actually know them.
      </>
    ),
  },
  {
    q: (
      <>
        What does <em>koine</em> mean?
      </>
    ),
    a: (
      <>
        Greek for &ldquo;common.&rdquo; It was the everyday tongue that let the
        ancient Mediterranean understand each other. It is the language we are
        building between humans and machines.
      </>
    ),
  },
];

const SHARDS: Array<{ angle: number; value: React.ReactNode; label: React.ReactNode }> = [
  { angle: -90, value: <em>26.4y</em>, label: "spent asleep" },
  { angle: -30, value: "80y",          label: "the average life" },
  { angle: 30,  value: "5",            label: "signals, one read" },
  { angle: 90,  value: "2",            label: "waking and dreaming" },
  { angle: 150, value: <em>1</em>,     label: <>self &mdash; not paused</> },
  { angle: 210, value: "⅔",            label: "the conscious self" },
];

const SCENE_2_QUOTE =
  "You woke up uneasy. Want me to keep things quiet this morning?";

export default function Home() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistError, setWaitlistError] = useState<string | null>(null);
  const [typedLength, setTypedLength] = useState(0);

  // Reveal observer (incl. sequential manifesto lines)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => io.observe(el));

    const lines = Array.from(
      document.querySelectorAll<HTMLElement>(".mline")
    );
    const lio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = lines.indexOf(e.target as HTMLElement);
            setTimeout(() => e.target.classList.add("in"), i * 120);
          }
        }),
      { threshold: 0.4 }
    );
    lines.forEach((l) => lio.observe(l));

    return () => {
      io.disconnect();
      lio.disconnect();
    };
  }, []);

  // Scrub-stage: drive active scene from scroll position
  useEffect(() => {
    const scrub = scrubRef.current;
    if (!scrub) return;
    const SCENES = 4;
    const update = () => {
      const rect = scrub.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progressed = Math.max(0, Math.min(1, -rect.top / total));
      const idx = Math.min(
        SCENES - 1,
        Math.floor(progressed * SCENES * 0.999)
      );
      setActiveScene(idx);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Typewriter for scene 2's quote — types out on scene entry, resets on exit.
  useEffect(() => {
    if (activeScene !== 2) {
      setTypedLength(0);
      return;
    }
    setTypedLength(0);
    let cancelled = false;
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const startId = setTimeout(() => {
      if (cancelled) return;
      intervalId = setInterval(() => {
        i++;
        setTypedLength(i);
        if (i >= SCENE_2_QUOTE.length && intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }, 32);
    }, 400);
    return () => {
      cancelled = true;
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeScene]);

  const toggleFaq = (i: number) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handleWaitlist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") ?? "").toString().trim();
    if (!email) return;

    setWaitlistError(null);
    setWaitlistSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setWaitlistSubmitted(true);
        form.reset();
      } else {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setWaitlistError(data?.error ?? "Something went wrong. Try again.");
      }
    } catch {
      setWaitlistError("Couldn't reach the server. Try again.");
    } finally {
      setWaitlistSubmitting(false);
    }
  };

  return (
    <>
      <FieldCanvas />
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="ring">
          <svg viewBox="0 0 600 600">
            <circle
              cx="300"
              cy="300"
              r="240"
              style={{ animation: "rot 80s linear infinite" }}
            />
            <circle
              cx="300"
              cy="300"
              r="200"
              style={{
                animation: "rot 60s linear reverse infinite",
                stroke: "rgba(240,227,200,.6)",
              }}
            />
            <circle
              cx="300"
              cy="300"
              r="160"
              style={{ animation: "rot 50s linear infinite" }}
            />
            <circle
              cx="300"
              cy="300"
              r="120"
              style={{
                animation: "rot 40s linear reverse infinite",
                stroke: "rgba(240,227,200,.6)",
              }}
            />
            <circle
              cx="300"
              cy="300"
              r="80"
              style={{ animation: "rot 30s linear infinite" }}
            />
          </svg>
        </div>

        <div>
          <div className="hero-eyebrow">Koine Labs · Ambient AI</div>
          <h1 className="reveal in">
            An AI that knows
            <br />
            <em>how you feel</em>
            <br />
            <span className="blur">before you do.</span>
          </h1>
          <p className="hero-sub reveal in reveal-d2">
            A continuous read of your inner state across waking and dreaming —
            from brain, audio, visual, heart, and body. Software that meets you
            where you actually are — not where your words approximate.
          </p>
          <a href="#waitlist" className="hero-cta reveal in reveal-d3">
            Join the waitlist
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className="scroll-cue">
          <span className="dot" />
          <span>Scroll</span>
        </div>
      </section>

      {/* DAYBOOK */}
      <section className="daybook" id="daybook">
        <div className="container">
          <div className="daybook-intro reveal">
            <div className="eyebrow">01 · Product</div>
            <h2>
              Meet <em>Daybook.</em>
            </h2>
            <p>
              Daybook is the read. <em className="wisp">Koine Wisp</em> is the
              instrument. Together they listen to five continuous signals
              across waking and dreaming, and synthesize one thing: a living
              read of how you actually are.
            </p>
          </div>
        </div>

        <div className="scrub" ref={scrubRef}>
          <div className="scrub-pin">
            <div className="device">
              <div className="device-frame">
                <div className="device-header">
                  <span>Daybook · 06:42 · Tue</span>
                  <span>Cohort 01 — Sess 0184</span>
                </div>
                <div className="device-body">
                  <div className={"scene" + (activeScene === 0 ? " show" : "")}>
                    <div className="stateword">
                      tender<span className="punc">.</span>
                    </div>
                    <div className="below">Inner state</div>
                    {/* synthesis visual: 5 input traces converge at a node,
                        then one synthesized wave exits to the right */}
                    <svg
                      className="synthesis"
                      viewBox="0 0 400 60"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      {/* five input traces curving toward the convergence node */}
                      <path className="trace" d="M0 6  Q 70 6,  120 30" />
                      <path className="trace" d="M0 18 Q 70 18, 120 30" />
                      <path className="trace" d="M0 30 L 120 30" />
                      <path className="trace" d="M0 42 Q 70 42, 120 30" />
                      <path className="trace" d="M0 54 Q 70 54, 120 30" />
                      {/* convergence node + pulsing halo */}
                      <circle className="merge-halo" cx="120" cy="30" r="5" />
                      <circle className="merge" cx="120" cy="30" r="2.4" />
                      {/* the synthesized output trace — a gentle wave from convergence outward */}
                      <path
                        className="synth"
                        d="M120 30 Q 150 20, 180 30 T 240 30 T 300 30 T 360 30 T 400 30"
                      />
                    </svg>
                  </div>
                  <div className={"scene" + (activeScene === 1 ? " show" : "")}>
                    <div className="below" style={{ marginBottom: 18 }}>
                      Five continuous signals
                    </div>
                    {/* Waking ↔ Dream context spectrum — the meta-layer
                        that biases how the inputs are interpreted */}
                    <div className="context-strip">
                      <span className="context-label">Waking</span>
                      <div className="context-line">
                        <span className="context-cursor" />
                      </div>
                      <span className="context-label">Dreaming</span>
                    </div>
                    <div className="signal-grid">
                      <div className="sig">
                        <div className="sig-head">
                          <span className="sig-pulse" />
                          <span className="sig-num">i</span>
                        </div>
                        <div className="sig-name">Brain<span className="sig-period">.</span></div>
                      </div>
                      <div className="sig">
                        <div className="sig-head">
                          <span className="sig-pulse" />
                          <span className="sig-num">ii</span>
                        </div>
                        <div className="sig-name">Audio<span className="sig-period">.</span></div>
                      </div>
                      <div className="sig">
                        <div className="sig-head">
                          <span className="sig-pulse" />
                          <span className="sig-num">iii</span>
                        </div>
                        <div className="sig-name">Visual<span className="sig-period">.</span></div>
                      </div>
                      <div className="sig">
                        <div className="sig-head">
                          <span className="sig-pulse" />
                          <span className="sig-num">iv</span>
                        </div>
                        <div className="sig-name">Heart<span className="sig-period">.</span></div>
                      </div>
                      <div className="sig">
                        <div className="sig-head">
                          <span className="sig-pulse" />
                          <span className="sig-num">v</span>
                        </div>
                        <div className="sig-name">Body<span className="sig-period">.</span></div>
                      </div>
                    </div>
                  </div>
                  <div className={"scene" + (activeScene === 2 ? " show" : "")}>
                    <div
                      className={
                        "quote" +
                        (typedLength >= SCENE_2_QUOTE.length ? " complete" : "")
                      }
                    >
                      {SCENE_2_QUOTE.slice(0, typedLength)}
                      {typedLength < SCENE_2_QUOTE.length && (
                        <span className="cursor" aria-hidden="true" />
                      )}
                    </div>
                    <div className="below" style={{ marginTop: 32 }}>
                      Daybook · proactive
                    </div>
                    {/* listening indicator — appears after the quote types
                        out, signals Daybook is now waiting on the user */}
                    <div
                      className={
                        "listening" +
                        (typedLength >= SCENE_2_QUOTE.length ? " in" : "")
                      }
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className={"scene" + (activeScene === 3 ? " show" : "")}>
                    <div className="stateword">
                      <em>becoming</em>
                    </div>
                    <div className="below">
                      A common tongue between human and machine
                    </div>
                    {/* the weave: two strands (human + machine) braid through
                        each other, ending in swapped positions — a shared tongue.
                        Mirrors scene 0's synthesis (many → one) with one ↔ one. */}
                    <svg
                      className="weave"
                      viewBox="0 0 400 60"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        className="strand strand-human"
                        d="M0 18 Q 50 18, 100 30 Q 150 42, 200 30 Q 250 18, 300 30 Q 350 42, 400 42"
                      />
                      <path
                        className="strand strand-machine"
                        d="M0 42 Q 50 42, 100 30 Q 150 18, 200 30 Q 250 42, 300 30 Q 350 18, 400 18"
                      />
                      {/* small markers at the three crossover points — the moments of meeting */}
                      <circle className="meet" cx="100" cy="30" r="1.6" />
                      <circle className="meet" cx="200" cy="30" r="1.6" />
                      <circle className="meet" cx="300" cy="30" r="1.6" />
                    </svg>
                  </div>
                </div>
                <div className="device-footer">
                  <span>Koine Wisp · paired</span>
                  <span>on-device</span>
                  <span>private</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scrub-coda reveal">
          <p>
            Across waking and dreaming, from five continuous signals — Daybook
            reads <em>one living word for how you are.</em>
          </p>
        </div>
      </section>

      {/* NORTHSTAR */}
      <section className="northstar" id="northstar">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            02 · Northstar
          </div>
          <h2 className="northstar-h reveal reveal-d1">
            Give humanity back <em>one third</em>
            <br />
            of <span className="fraction">its life.</span>
          </h2>
          <p className="northstar-body reveal reveal-d2">
            You spend roughly twenty-six years of your life unconscious. We
            treat that as missing time. Our long horizon is to build a
            continuous interface over the dream layer — so the third you lose is
            a third returned.
          </p>

          <div className="orbit-wheel reveal reveal-d3">
            <div className="orbit-ring">
              {SHARDS.map((s, i) => (
                <div
                  key={i}
                  className="shard"
                  style={{ ["--a" as string]: `${s.angle}deg` } as React.CSSProperties}
                >
                  <div className="shard-counter">
                    <div className="shard-body">
                      <div className="v">{s.value}</div>
                      <div className="k">{s.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="orbit-center">
              <div className="num">⅓</div>
              <div className="lbl">of one human life</div>
            </div>
          </div>

          <div className="horizon reveal reveal-d4">
            <div className="h now">
              <div className="yr">In development</div>
              <div className="t">Daybook + Koine Wisp</div>
              <div className="d">
                The read and the instrument. An empath AI prototype paired with
                our first ambient wearable — a continuous read of inner state
                across waking and dreaming, from brain, audio, visual, heart,
                and body. Both in active build.
              </div>
            </div>
            <div className="h long">
              <div className="yr">The long horizon</div>
              <div className="t">Open questions.</div>
              <ul>
                <li>Can an instrument listen to a dream?</li>
                <li>Is sleep&apos;s third returnable to a continuous self?</li>
                <li>
                  What is the right interface for a state that has no words?
                </li>
              </ul>
              <div className="note">
                We don&apos;t know yet. We are working to find out.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto" id="manifesto">
        <span className="greek">κοινή</span>
        <div className="container">
          <div
            className="eyebrow reveal"
            style={{ display: "block", textAlign: "center", marginBottom: 48 }}
          >
            03 · Manifesto
          </div>
          <div className="manifesto-lines">
            <div className="mline">
              The next interface is not <em>a screen.</em>
            </div>
            <div className="mline">
              It is not <em>a keyboard,</em> or <em>a voice.</em>
            </div>
            <div className="mline">
              It is <em>a shared understanding of state.</em>
            </div>
            <div className="mline">
              A{" "}
              <span className="ref">
                common tongue<sup>*</sup>
              </span>{" "}
              between you and the machine.
            </div>
            <div className="mline">
              <em>We are building it.</em>
            </div>
          </div>

          <div className="footnote reveal">
            <span className="marker">* fn.01</span>
            <div className="head">
              <span className="w">koine</span>
              <span className="pos">n.</span>
              <span className="ipa">/koɪˈneɪ/ · Gk. κοινή</span>
            </div>
            <div className="body">
              A common dialect &mdash; the everyday Greek that let strangers
              across the ancient Mediterranean understand each other for the
              first time. The name we have chosen for what we are building
              between humans and machines.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="chapter reveal">
            <div className="rule">
              <span className="id">04 · FAQ</span>
            </div>
            <h2>
              Questions <em>worth asking.</em>
            </h2>
            <p className="lede">
              A few of the most common, and a few we ask ourselves.
            </p>
          </div>
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={
                  "qa reveal" +
                  (i >= 1 && i <= 4 ? ` reveal-d${Math.min(i, 4)}` : "") +
                  (openFaq.has(i) ? " open" : "")
                }
                onClick={() => toggleFaq(i)}
              >
                <div className="qrow">
                  <div className="q">{item.q}</div>
                  <span className="plus">+</span>
                </div>
                <div className="a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="waitlist" id="waitlist">
        <div className="container">
          <div className="section-card">
            <h2 className="reveal">
              Be among the
              <br />
              first <em>understood.</em>
            </h2>
            <form className="form reveal reveal-d2" onSubmit={handleWaitlist}>
              <input
                type="email"
                name="email"
                placeholder="you@somewhere.earth"
                required
                disabled={waitlistSubmitting || waitlistSubmitted}
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={waitlistSubmitting || waitlistSubmitted}
              >
                {waitlistSubmitted
                  ? "You're in ✓"
                  : waitlistSubmitting
                    ? "Sending…"
                    : "Request access →"}
              </button>
            </form>
            {waitlistError && (
              <p className="form-error" role="alert">
                {waitlistError}
              </p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
