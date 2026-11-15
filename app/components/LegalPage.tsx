import type { Metadata } from "next";
import type { ReactNode } from "react";
import { POLICIES_UPDATED } from "../lib/site";

export type Part = { id: string; title: string; body: ReactNode };

export function legalMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} · Koine Labs`,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} · Koine Labs`, description, url: path },
  };
}

// One policy page: its name, a plain summary, the date it last changed, a list of its parts, then the parts.
export default function LegalPage({ title, summary, parts }: { title: string; summary: ReactNode; parts: Part[] }) {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec page-top legal">
        <div className="in">
          <header className="side"><h1 className="side-title">{title}</h1></header>
          <div className="main">
            <p className="summary">{summary}</p>
            <p className="updated">Last updated {POLICIES_UPDATED}</p>
            {parts.length > 3 ? (
              <nav className="toc" aria-labelledby="toc-title">
                <h2 id="toc-title">On this page</h2>
                <ol>
                  {parts.map((p) => <li key={p.id}><a href={`#${p.id}`}>{p.title}</a></li>)}
                </ol>
              </nav>
            ) : null}
            <div className="prose">
              {parts.map((p) => (
                <section key={p.id} id={p.id} aria-labelledby={`${p.id}-h`}>
                  <h2 id={`${p.id}-h`}>{p.title}</h2>
                  {p.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
