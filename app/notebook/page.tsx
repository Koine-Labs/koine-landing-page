// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notebook · Koine Labs",
  description: "The Koine Labs notebook: the reasoning behind the missions, written as essays. The first five are in preparation.",
  alternates: { canonical: "/notebook" },
  openGraph: {
    title: "Notebook · Koine Labs",
    description: "The Koine Labs notebook: the reasoning behind the missions, written as essays. The first five are in preparation.",
    url: "/notebook",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "Notebook · Koine Labs", description: "The Koine Labs notebook: the reasoning behind the missions, written as essays. The first five are in preparation.", images: ["/og/og-home.png"] },
};

export default function Page() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec page-top" id="notebook">
        <div className="in">
          <header className="side">
            <h1 className="side-title">Notebook</h1>
          </header>
          <div className="main">
            <p className="lead">This is where we write things down: the reasoning behind the missions, as essays with their own figures. The first five are in preparation.</p>
            <ol className="essays">
              <li><span className="t">The future arrives at the moment of change</span><span className="st">In preparation</span><span className="p">On time as the perception of change.</span></li>
              <li><span className="t">Time amplification, not attention capture</span><span className="st">In preparation</span><span className="p">On what a tool should do with the time you give it.</span></li>
              <li><span className="t">You are what you do</span><span className="st">In preparation</span><span className="p">On building a will through action.</span></li>
              <li><span className="t">Words lose most of the thought</span><span className="st">In preparation</span><span className="p">On the gap between a thought and its expression, and why the interface has to move toward gaze and gesture.</span></li>
              <li><span className="t">The world you see is rendered</span><span className="st">In preparation</span><span className="p">On perception as something each person constructs.</span></li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
