// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";
import type { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "Koine Labs",
  description: "Koine Labs is a research lab with three products in development: Mentat, Annula and Anchor.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Koine Labs",
    description: "Koine Labs is a research lab with three products in development: Mentat, Annula and Anchor.",
    url: "/",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "Koine Labs", description: "Koine Labs is a research lab with three products in development: Mentat, Annula and Anchor.", images: ["/og/og-home.png"] },
};

export default function Page() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap">
          <p className="label"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor" /></svg>Koine Labs, a research lab</p>
          <h1>Shaping the future through the present, by understanding the past.</h1>
          <p className="sub">We are building three products around that sentence: a new way to direct AI agents, research software for investors, and an app that learns how you live.</p>
        </div>
      </section>
      <section className="doors" aria-label="Projects">
        <div className="wrap">
          <a className="door-link" href="/mentat">
            <article className="door">
              <div className="door-text">
                <p className="cat">An interface for AI agents</p>
                <h2>Mentat</h2>
                <p className="one">Look at what you mean and tap. Your agents know what you are pointing at and what to do.</p>
                <p className="meta"><span className="go">Open Mentat</span><span className="stage">Research prototype</span><span className="stage">Hardware + software</span></p>
              </div>
              <div className="door-fig">
                <div className="sheet paper">
                  <div className="plot fig-photo"><img src="/assets/mentat-frame.webp" width="1760" height="770" fetchPriority="high" alt="The Mentat frame, drawn from its design files: an angular frame worn like glasses, with a mount for a forward camera on top of the bridge, a mount for an eye camera under each lens opening, a nose support, and two arms." /> <span className="tag q" style={{"--x": "1.2%", "--y": "95%"} as CSSProperties} aria-hidden="true">Frame v3.4, from our design files</span></div>
                </div>
              </div>
            </article>
          </a>
          <a className="door-link" href="/annula">
            <article className="door">
              <div className="door-text">
                <p className="cat">Research software for investors</p>
                <h2>Annula</h2>
                <p className="one">Annula shows why your stocks moved today and reads every new filing for you. It also keeps your reasons for owning each business, to check against what comes next.</p>
                <p className="meta"><span className="go">Open Annula</span><span className="stage">On TestFlight</span><span className="stage">Software</span></p>
              </div>
              <div className="door-fig">
                <div className="sheet paper">
                  <div className="plot fig-phones">
                    <div className="phones">
                      <figure className="phone">
                        <img src="/assets/annula-account.webp" width="603" height="1311" alt="Annula's Account screen on sample data: the total value of the accounts, today's change, a chart of the day, and the list of positions." loading="lazy" />
                        <figcaption>Account</figcaption>
                      </figure>
                      <figure className="phone">
                        <img src="/assets/annula-desk.webp" width="603" height="1311" alt="Annula's Desk screen on sample data: counts of written theses, ideas and calendar items, then what is on your desk today, such as a thesis that is going against you and a holding with no thesis yet." loading="lazy" />
                        <figcaption>Desk</figcaption>
                      </figure>
                      <figure className="phone">
                        <img src="/assets/annula-watchlist.webp" width="603" height="1311" alt="Annula's Watchlist screen on sample data: companies near the price you set, each marked as on thesis or held, with its buy-below level." loading="lazy" />
                        <figcaption>Watchlist</figcaption>
                      </figure>
                    </div>
                    <p className="fig-note">From the app, on sample data</p>
                  </div>
                </div>
              </div>
            </article>
          </a>
          <a className="door-link" href="/anchor">
            <article className="door">
              <div className="door-text">
                <p className="cat">An app that learns how you live</p>
                <h2>Anchor</h2>
                <p className="one">Anchor learns how your days actually go. Each morning it guesses the day ahead, checks itself against what happened, and suggests something new when you have the time.</p>
                <p className="meta"><span className="go">Open Anchor</span><span className="stage">On TestFlight</span><span className="stage">Software + sensing</span></p>
              </div>
              <div className="door-fig">
                <div className="sheet paper">
                  <div className="plot fig-phones">
                    <div className="phones">
                      <figure className="phone">
                        <img src="/assets/anchor-today.webp" width="603" height="1311" alt="Anchor's Today screen on its sample week: the next thing coming up and when to leave for it, and a ring showing how the 24 hours are shared between sleep, work, travel, the gym and free time." loading="lazy" />
                        <figcaption>Today</figcaption>
                      </figure>
                      <figure className="phone">
                        <img src="/assets/anchor-calendar.webp" width="603" height="1311" alt="Anchor's Calendar screen on its sample week: the day's plan drawn as dashed outlines with what was seen filled in beside it, a line for last night's sleep, the share of the plan that was seen, and the day's energy level." loading="lazy" />
                        <figcaption>Calendar</figcaption>
                      </figure>
                      <figure className="phone">
                        <img src="/assets/anchor-week.webp" width="603" height="1311" alt="Anchor's This week screen on its sample week: each day with one bar for what was planned and one for what was seen, marked not seen, done, rest day or planned." loading="lazy" />
                        <figcaption>This week</figcaption>
                      </figure>
                    </div>
                    <p className="fig-note">From the app, on sample data</p>
                  </div>
                </div>
              </div>
            </article>
          </a>
        </div>
      </section>
      <section className="sec home-end" id="contact" tabIndex={-1}>
        <div className="in">
          <header className="side">
            <h2>Contact</h2>
          </header>
          <div className="main">
            <p className="lead">Koine Labs is run by Aakash Agrawal.</p>
            <a className="mail" href="mailto:team@koinelabs.com?subject=A%20conversation%20with%20Koine%20Labs">team@koinelabs.com</a>
            <p className="more"><a href="/contact">Send us a message</a>{" · "}<a href="/about">About the lab</a>{" · "}<a href="/notebook">Notebook</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
