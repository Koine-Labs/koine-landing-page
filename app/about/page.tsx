// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Koine Labs",
  description: "Koine Labs is a research lab. Each of its projects is built around a mission, and each mission follows from one sentence.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Koine Labs",
    description: "Koine Labs is a research lab. Each of its projects is built around a mission, and each mission follows from one sentence.",
    url: "/about",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "About · Koine Labs", description: "Koine Labs is a research lab. Each of its projects is built around a mission, and each mission follows from one sentence.", images: ["/og/og-home.png"] },
};

export default function Page() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec page-top about" id="about">
        <div className="in">
          <header className="side">
            <h1 className="side-title">About</h1>
          </header>
          <div className="main">
            <p className="kicker">Our North Star</p>
            <p className="mission">Shaping the future through the present, by understanding the past.</p>
            <div className="about-text">
              <p>Koine Labs builds tools to test one idea about time. We think of <strong>memory</strong> as the past held in the present, and of <strong>intention</strong> as the future held in the present. To act is to bring the two together.</p>
              <p>Each project is built around a mission, and each mission is in line with the North Star.</p>
            </div>
            <div className="tree">
              <p className="label"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor" /></svg>Missions</p>
              <ol>
                <li><a href="/mentat"><span className="n">Mentat</span><span className="m">Build the interface for the age of AI agents.</span><span className="s">Research prototype</span></a></li>
                <li><a href="/annula"><span className="n">Annula</span><span className="m">Keep your reasons for owning a business, and check new evidence against them.</span><span className="s">On TestFlight</span></a></li>
                <li><a href="/anchor"><span className="n">Anchor</span><span className="m">Understand your days well enough to see what comes next.</span><span className="s">On TestFlight</span></a></li>
              </ol>
            </div>
            <div className="later name">
              <h2 className="part">The name</h2>
              <p className="going">The Koine was a bridge.</p>
              <div className="about-text">
                <p>Koine (κοινή) was the shared Greek of the ancient Mediterranean. It let people who spoke different dialects understand one another. The language was the <strong>bridge</strong>.</p>
                <p>That is why we took the name. Koine Labs is a bridge between the <strong>past</strong>, the <strong>present</strong> and the <strong>future</strong>. Memory carries the past into the present; intention carries the future into it.</p><p>Everything we build has one purpose: to <strong>amplify your intention</strong>. It learns from your past, works with you in the present, and widens what you can do with the time you have.</p>
              </div>
            </div>
            <div className="later">
              <h2 className="part">Who we are</h2>
              <p className="going">Koine Labs is run by Aakash Agrawal.</p>
              <a className="mail" href="mailto:team@koinelabs.com?subject=A%20conversation%20with%20Koine%20Labs">team@koinelabs.com</a>
              <p className="more"><a href="/contact">Or send us a message</a></p>
            </div>
            <div className="later">
              <h2 className="part">Notebook</h2>
              <p className="going">The reasoning behind the missions will be published as essays, with their own figures.</p>
              <p className="more"><a href="/notebook">Open the notebook: five essays, in preparation</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
