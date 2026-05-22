import type { ReactNode } from "react";
import { FieldCanvas } from "./FieldCanvas";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

interface LegalPageProps {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  updated: string;
  children: ReactNode;
}

/**
 * Shared shell for /privacy, /terms, /data-ethics — same nav, footer, and
 * canvas as the home page, with an editorial header + readable single-column
 * content area.
 */
export function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  children,
}: LegalPageProps) {
  return (
    <>
      <FieldCanvas />
      <SiteNav />
      <main className="legal">
        <header className="legal-header">
          <div className="legal-eyebrow">{eyebrow}</div>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-lede">{lede}</p>
          <div className="legal-meta">
            <span>Last updated {updated}</span>
          </div>
        </header>
        <article className="legal-content">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
