// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";
import WaitlistSection from "../components/WaitlistSection";

export const metadata: Metadata = {
  title: "Annula · Koine Labs",
  description: "Annula shows investors why their stocks moved, reads new filings for them and keeps their reasons for owning each business.",
  alternates: { canonical: "/annula" },
  openGraph: {
    title: "Annula · Koine Labs",
    description: "Annula shows investors why their stocks moved, reads new filings for them and keeps their reasons for owning each business.",
    url: "/annula",
    images: [{ url: "/og/og-annula.png", width: 1200, height: 630, alt: "Annula, from Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "Annula · Koine Labs", description: "Annula shows investors why their stocks moved, reads new filings for them and keeps their reasons for owning each business.", images: ["/og/og-annula.png"] },
};

export default function Page() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec project page-top" id="annula">
        <div className="in">
          <header className="side">
            <img className="p-mark" src="/assets/annula-mark.svg" alt="" width="100" height="100" />
            <h1 className="p-name">Annula</h1>
            <p className="p-line">An instrument for belief.</p>
          </header>
          <div className="main">
            <h2 className="kicker">What we are trying to do</h2>
            <p className="mission">Keep your reasons for owning a business, and check new evidence against them.</p>
            <figure className="frame-fig">
              <div className="sheet paper">
                <div className="plot fig-phones">
                  <div className="phones">
                    <figure className="phone">
                      <img src="/assets/annula-account.webp" width="603" height="1311" alt="Annula's Account screen on sample data: the total value of the accounts, today's change, a chart of the day, and the list of positions." fetchPriority="high" />
                      <figcaption>Account</figcaption>
                    </figure>
                    <figure className="phone">
                      <img src="/assets/annula-desk.webp" width="603" height="1311" alt="Annula's Desk screen on sample data: counts of written theses, ideas and calendar items, then what is on your desk today, such as a thesis that is going against you and a holding with no thesis yet." />
                      <figcaption>Desk</figcaption>
                    </figure>
                    <figure className="phone">
                      <img src="/assets/annula-watchlist.webp" width="603" height="1311" alt="Annula's Watchlist screen on sample data: companies near the price you set, each marked as on thesis or held, with its buy-below level." />
                      <figcaption>Watchlist</figcaption>
                    </figure>
                  </div>
                  <p className="fig-note">From the app, on sample data</p>
                </div>
              </div>
            </figure>
            <div className="argue">
              <div className="text">
                <h2 className="part">What it is today</h2>
                <p>Annula is a web app in private beta and an iPhone app on TestFlight. It shows why your stocks moved today: how much came from the market, from the sector, and from the company itself.</p>
                <p>When a company you own files something new, Annula reads it within minutes and says in plain words what changed. You can also write down why you own each business, and Annula keeps it as you wrote it.</p>
              </div>
              <div className="align">
                <h3><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor" /></svg>In line with the North Star</h3>
                <p>Understanding the past includes your own past reasoning. Annula keeps it as it was, so the decision you make today is checked against it.</p>
              </div>
            </div>
            <div className="later">
              <h2 className="part">How it helps you</h2>
              <figure className="shot plan">
                <img src="/assets/annula-d-moved-1400.webp" srcSet="/assets/annula-d-moved-800.webp 800w, /assets/annula-d-moved-1400.webp 1400w, /assets/annula-d-moved-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of an investor at a desk in the evening, seen from behind, looking at a laptop. The screen is repeated larger beside it: Company A, minus 2.1 percent today, and a bar split into market minus 0.6, sector minus 0.3 and company minus 1.2, with the sentence: most of it came from the company. Labels: 1, your stock moved. 2, Annula splits the move in three. 3, you get the reason in one sentence." />
                <figcaption>Why it moved. One figure for the day, split between the market, the sector and the company, and the reason in a sentence. The figures are an example.</figcaption>
              </figure>
              <dl className="later-list two">
                <div>
                  <dt>Know why it moved</dt>
                  <dd>One number, one sentence, then the reason: the market, the sector or the company.</dd>
                </div>
                <div>
                  <dt>Never miss a filing</dt>
                  <dd>Annual reports, quarterly reports and insider trades for what you own, read for you as they land.</dd>
                </div>
                <div>
                  <dt>Check any number</dt>
                  <dd>Every figure opens to the filing or the price it came from. Nothing is invented, and anything written by AI is labelled.</dd>
                </div>
                <div>
                  <dt>Keep your reasoning honest</dt>
                  <dd>Your reasons stay as you wrote them, so later you can see how your thinking changed and whether it held up.</dd>
                </div>
              </dl>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/annula-d-timeline-1400.webp" srcSet="/assets/annula-d-timeline-800.webp 800w, /assets/annula-d-timeline-1400.webp 1400w, /assets/annula-d-timeline-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="1080" loading="lazy" alt="A timeline with three note cards pinned above it: why I bought, in March; what I changed, in July; how it turned out, in November. A new filing sits on the line between each pair. A label on the first pin reads: kept as you wrote it." /></div>
                <figcaption>Your reasons stay as you wrote them, in order, with the filings that came between.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/annula-d-source-1400.webp" srcSet="/assets/annula-d-source-800.webp 800w, /assets/annula-d-source-1400.webp 1400w, /assets/annula-d-source-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1084" loading="lazy" alt="A phone showing the sentence: revenue grew 12 percent this quarter, with 12 percent highlighted and a tag reading written by AI. A line runs from the highlighted figure to the same figure in a table on a page of a company report. Labels: the number you read; the filing it came from; AI writing is labelled." /></div>
                <figcaption>Every figure opens to the filing it came from, and anything written by AI says so.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">What we want to build</h2>
              <p className="plan-note">These are design drawings of what we are working toward. They are not built yet.</p>
              <h3 className="kicker">What it will do</h3>
              <dl className="later-list two">
                <div>
                  <dt>Alerts on your phone</dt>
                  <dd>A notification when a filing lands for a stock you own.</dd>
                </div>
                <div>
                  <dt>Checks on your own conditions</dt>
                  <dd>Write "sell if the renewal rate falls below 88%", and Annula checks that number in every new filing.</dd>
                </div>
                <div>
                  <dt>Annula for Mac</dt>
                  <dd>A desktop app on the same account.</dd>
                </div>
                <div>
                  <dt>Live prices for everyone</dt>
                  <dd>A licensed price feed, so Annula can open to the public.</dd>
                </div>
              </dl>
              <figure className="shot plan">
                <img src="/assets/annula-d-alert-1400.webp" srcSet="/assets/annula-d-alert-800.webp 800w, /assets/annula-d-alert-1400.webp 1400w, /assets/annula-d-alert-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a person in a kitchen in the early morning, holding a mug and reading a phone. The screen is repeated larger beside it: new filing; Company A, quarterly report; revenue up, margin down, one new risk. Labels: 1, a company you own files a report. 2, Annula reads it within minutes. 3, your phone tells you what changed." />
                <figcaption>An alert on your phone when a company you own files a report, saying what changed.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/annula-d-condition-1400.webp" srcSet="/assets/annula-d-condition-800.webp 800w, /assets/annula-d-condition-1400.webp 1400w, /assets/annula-d-condition-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="968" loading="lazy" alt="A pinned note headed your condition, reading: sell if the renewal rate falls below 88 percent. Beside it a chart with a dashed line at 88 percent and one point for each quarterly filing: 93, 91 and 89 percent above the line, then 86 percent below it, ringed. Labels: checked in every new filing; condition met, you are told." /></div>
                <figcaption>Your own condition, checked in every new filing. When the number crosses the level you set, you are told. The figures are an example.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/annula-d-devices-1400.webp" srcSet="/assets/annula-d-devices-800.webp 800w, /assets/annula-d-devices-1400.webp 1400w, /assets/annula-d-devices-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1208" loading="lazy" alt="A phone, a laptop with a browser window and a desktop computer in a row, all showing the same screen. Captions: iPhone, Web, Mac. Below: one account on all three." /></div>
                <figcaption>One account on iPhone, on the web and on a Mac. The Mac app is the part still to build.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">Where it is going</h2>
              <p className="going">The place where you find businesses worth owning, form a view of what they are worth, manage what you hold, and learn from how your reasoning changed.</p>
              <figure className="shot plan">
                <img src="/assets/annula-d-cycle-1400.webp" srcSet="/assets/annula-d-cycle-800.webp 800w, /assets/annula-d-cycle-1400.webp 1400w, /assets/annula-d-cycle-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="A ring with four stations around it: 1, find businesses worth owning, drawn as a magnifying glass over a factory. 2, form a view of what they are worth, a balance scale. 3, manage what you hold, three cards with charts. 4, learn from how your reasoning changed, an open notebook. In the centre, a closed notebook captioned: your reasons, kept." />
                <figcaption>The whole cycle in one place, with your reasons kept at the centre of it.</figcaption>
              </figure>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Stage</dt>
              <dd>Private beta on the web, TestFlight on iPhone</dd>
            </div>
            <div>
              <dt>Kind</dt>
              <dd>Software</dd>
            </div>
            <div>
              <dt>Site</dt>
              <dd>useannula.com</dd>
            </div>
          </dl>
        </div>
      </section>
      <WaitlistSection product="annula" />
      <section className="sec" tabIndex={-1}>
        <div className="in">
          <header className="side">
            <h2>Also from the lab</h2>
          </header>
          <div className="main">
            <div className="next"><a href="/mentat"><b>Mentat</b><span>An interface for AI agents</span></a><a href="/anchor"><b>Anchor</b><span>An app that learns how you live</span></a><a href="mailto:team@koinelabs.com?subject=Annula"><b>Write to us</b><span>team@koinelabs.com</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
