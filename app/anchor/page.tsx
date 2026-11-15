// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";
import WaitlistSection from "../components/WaitlistSection";

export const metadata: Metadata = {
  title: "Anchor · Koine Labs",
  description: "Anchor learns how one person's days go, guesses what comes next and checks itself against what happened.",
  alternates: { canonical: "/anchor" },
  openGraph: {
    title: "Anchor · Koine Labs",
    description: "Anchor learns how one person's days go, guesses what comes next and checks itself against what happened.",
    url: "/anchor",
    images: [{ url: "/og/og-anchor.png", width: 1200, height: 630, alt: "Anchor, from Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "Anchor · Koine Labs", description: "Anchor learns how one person's days go, guesses what comes next and checks itself against what happened.", images: ["/og/og-anchor.png"] },
};

export default function Page() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec project page-top" id="anchor">
        <div className="in">
          <header className="side">
            <img className="p-mark" src="/assets/anchor-mark.svg" alt="" width="100" height="100" />
            <h1 className="p-name">Anchor</h1>
            <p className="p-line">Know your own days.</p>
          </header>
          <div className="main">
            <h2 className="kicker">What we are trying to do</h2>
            <p className="mission">Understand your days well enough to see what comes next.</p>
            <figure className="frame-fig">
              <div className="sheet paper">
                <div className="plot fig-phones">
                  <div className="phones">
                    <figure className="phone">
                      <img src="/assets/anchor-today.webp" width="603" height="1311" alt="Anchor's Today screen on its sample week: the next thing coming up and when to leave for it, and a ring showing how the 24 hours are shared between sleep, work, travel, the gym and free time." fetchPriority="high" />
                      <figcaption>Today</figcaption>
                    </figure>
                    <figure className="phone">
                      <img src="/assets/anchor-calendar.webp" width="603" height="1311" alt="Anchor's Calendar screen on its sample week: the day's plan drawn as dashed outlines with what was seen filled in beside it, a line for last night's sleep, the share of the plan that was seen, and the day's energy level." />
                      <figcaption>Calendar</figcaption>
                    </figure>
                    <figure className="phone">
                      <img src="/assets/anchor-week.webp" width="603" height="1311" alt="Anchor's This week screen on its sample week: each day with one bar for what was planned and one for what was seen, marked not seen, done, rest day or planned." />
                      <figcaption>This week</figcaption>
                    </figure>
                  </div>
                  <p className="fig-note">From the app, on sample data</p>
                </div>
              </div>
            </figure>
            <div className="argue">
              <div className="text">
                <h2 className="part">What it is today</h2>
                <p>Anchor is an iPhone app on TestFlight, in daily use by one person. It shows your day as you planned it beside how it actually went, with your sleep and energy alongside.</p>
                <p>Each morning it guesses how the day will go, and afterwards it checks itself. It is yours alone: everything stays on your phone and on a server you own.</p>
              </div>
              <div className="align">
                <h3><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor" /></svg>In line with the North Star</h3>
                <p>Anchor applies the North Star to one person. What you did is the past, the guess is the future, and the moment to say something is the present.</p>
              </div>
            </div>
            <figure className="shot">
              <div className="sheet paper"><img className="blend" src="/assets/anchor-d-yours-1400.webp" srcSet="/assets/anchor-d-yours-800.webp 800w, /assets/anchor-d-yours-1400.webp 1400w, /assets/anchor-d-yours-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1260" loading="lazy" alt="A phone and a small server on a shelf inside the outline of a house, joined by a two-way arrow and enclosed by one dashed line. Labels: your phone; a server you own; your record stays here." /></div>
              <figcaption>Your record stays on your phone and on a server you own.</figcaption>
            </figure>
            <div className="later">
              <h2 className="part">How it helps you</h2>
              <figure className="shot plan">
                <img src="/assets/anchor-d-day-1400.webp" srcSet="/assets/anchor-d-day-800.webp 800w, /assets/anchor-d-day-1400.webp 1400w, /assets/anchor-d-day-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="One day drawn from morning to night. Four small scenes of the same person: getting up, on a train, at a desk, reading on a sofa. Below, two rows. The plan, in dashed outlines: work, gym, dinner. What happened, filled in: sleep, travel, a longer stretch of work, home. A small circle marks the gym that did not happen, labelled: the gap between them." />
                <figcaption>One day, as planned and as it went. Work ran late and the gym did not happen. Anchor shows you that gap.</figcaption>
              </figure>
              <dl className="later-list two">
                <div>
                  <dt>See where the time went</dt>
                  <dd>Your day fills itself in from what your phone already knows. There is nothing to type.</dd>
                </div>
                <div>
                  <dt>Notice what you overlook</dt>
                  <dd>The days that went differently from usual, and the long stretches that slipped by unplanned.</dd>
                </div>
                <div>
                  <dt>Plan around your energy</dt>
                  <dd>From how you slept, it works out when you will be sharp and when you will dip.</dd>
                </div>
                <div>
                  <dt>Try something new</dt>
                  <dd>When a free stretch is coming, it suggests a place or a small change you have not tried.</dd>
                </div>
              </dl>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/anchor-d-energy-1400.webp" srcSet="/assets/anchor-d-energy-800.webp 800w, /assets/anchor-d-energy-1400.webp 1400w, /assets/anchor-d-energy-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="1312" loading="lazy" alt="A person asleep, labelled last night's sleep, with an arrow into a curve of energy across the day. The curve peaks in the morning, labelled sharp; sinks in the afternoon, labelled dip; and rises again in the early evening, labelled second wind. Under it the same person writes at a desk, walks outside and cooks. Below: hard thinking when you are sharp, a walk when you dip." /></div>
                <figcaption>From how you slept, Anchor works out when you will be sharp and when you will dip.</figcaption>
              </figure>
              <figure className="shot plan">
                <img src="/assets/anchor-d-new-1400.webp" srcSet="/assets/anchor-d-new-800.webp 800w, /assets/anchor-d-new-1400.webp 1400w, /assets/anchor-d-new-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a person walking along a quiet street in the early evening with a phone in hand. A bookshop is ringed. The screen is repeated larger beside it: a free hour before dinner; try the bookshop on your street? with two buttons, yes and not today. Labels: 1, a free stretch is coming. 2, Anchor suggests something new. 3, you decide." />
                <figcaption>When a free stretch is coming, Anchor suggests something you have not tried. You decide.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">What we want to build</h2>
              <p className="plan-note">These are design drawings of what we are working toward. They are not built yet.</p>
              <h3 className="kicker">What it will do</h3>
              <dl className="later-list two">
                <div>
                  <dt>An agent that keeps up with you</dt>
                  <dd>One that notices when your situation changes and helps with the next move, without waiting for a schedule.</dd>
                </div>
                <div>
                  <dt>Suggestions that learn</dt>
                  <dd>It keeps track of which nudges you act on, and drops the ones you ignore.</dd>
                </div>
                <div>
                  <dt>A to-do list that plans itself</dt>
                  <dd>Tasks placed into the day where they fit, and brought up at the right time.</dd>
                </div>
                <div>
                  <dt>Time on your projects</dt>
                  <dd>How long each project really takes, shown on your calendar.</dd>
                </div>
              </dl>
              <figure className="shot plan">
                <img src="/assets/anchor-d-agent-1400.webp" srcSet="/assets/anchor-d-agent-800.webp 800w, /assets/anchor-d-agent-1400.webp 1400w, /assets/anchor-d-agent-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a person leaving an office building in the afternoon, looking at a phone. A clock shows three. The screen is repeated larger beside it: your 3 o'clock was cancelled; now, the gym; 6:00, home; 7:00, dinner still fits. Labels: 1, your plans change. 2, Anchor notices. 3, it helps with the next move." />
                <figcaption>An agent that notices when your plans change and helps with the next move.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/anchor-d-todo-1400.webp" srcSet="/assets/anchor-d-todo-800.webp 800w, /assets/anchor-d-todo-1400.webp 1400w, /assets/anchor-d-todo-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1244" loading="lazy" alt="A list of three tasks, write the report, call the bank and buy a gift, with a line from each to a gap in a day that already holds work, lunch and the gym. Labels: placed where it fits; brought up at the right time." /></div>
                <figcaption>A to-do list that places itself into the day and brings each task up at the right time.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/anchor-d-projects-1400.webp" srcSet="/assets/anchor-d-projects-800.webp 800w, /assets/anchor-d-projects-1400.webp 1400w, /assets/anchor-d-projects-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="1144" loading="lazy" alt="A week's calendar with blocks of three kinds spread across the days, and a summary beside it: Project A, 11 hours; Project B, 6 hours; Project C, 2 hours. Label: how long each project really takes." /></div>
                <figcaption>Time on your projects, added up from the week on your calendar.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">Where it is going</h2>
              <p className="going">A model of how you live that you can ask questions of, and an agent that understands your days well enough to help with the next one.</p>
              <figure className="shot plan">
                <img src="/assets/anchor-d-ask-1400.webp" srcSet="/assets/anchor-d-ask-800.webp 800w, /assets/anchor-d-ask-1400.webp 1400w, /assets/anchor-d-ask-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a person on a sofa in the evening with a phone. The screen is repeated larger beside it. The question: when do I do my best work? The answer: Tuesday and Thursday mornings, after 7 hours of sleep, with a small chart of the week. Labels: 1, ask about your own days. 2, Anchor answers from what it has learned." />
                <figcaption>A model of how you live that you can ask questions of. The answer shown is an example.</figcaption>
              </figure>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Stage</dt>
              <dd>On TestFlight, used daily by one person</dd>
            </div>
            <div>
              <dt>Kind</dt>
              <dd>Software and sensing</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>iPhone, with a Mac companion</dd>
            </div>
          </dl>
        </div>
      </section>
      <WaitlistSection product="anchor" />
      <section className="sec" tabIndex={-1}>
        <div className="in">
          <header className="side">
            <h2>Also from the lab</h2>
          </header>
          <div className="main">
            <div className="next"><a href="/mentat"><b>Mentat</b><span>An interface for AI agents</span></a><a href="/annula"><b>Annula</b><span>Research software for investors</span></a><a href="mailto:team@koinelabs.com?subject=Anchor"><b>Write to us</b><span>team@koinelabs.com</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
