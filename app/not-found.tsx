// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Not found · Koine Labs", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec page-top" id="not-found">
        <div className="in">
          <header className="side">
            <h1 className="side-title">Not found</h1>
          </header>
          <div className="main">
            <p className="mission">This page is not here.</p>
            <p className="lead nf">It may have moved, or the address may be mistyped. These are the places it was most likely leading to.</p>
            <div className="next"><a href="/mentat"><b>Mentat</b><span>An interface for AI agents</span></a><a href="/annula"><b>Annula</b><span>Research software for investors</span></a><a href="/anchor"><b>Anchor</b><span>An app that learns how you live</span></a><a href="/"><b>Home</b><span>Koine Labs</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
