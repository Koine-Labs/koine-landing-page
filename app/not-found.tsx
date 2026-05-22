import type { Metadata } from "next";
import Link from "next/link";
import { FieldCanvas } from "./components/FieldCanvas";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Not yet — Koine Labs",
  description:
    "This page doesn't exist — at least not here, not yet. Find what you came for at koinelabs.com.",
};

export default function NotFound() {
  return (
    <>
      <FieldCanvas />
      <SiteNav />
      <main className="notfound">
        <div className="notfound-inner">
          <div className="notfound-eyebrow">404 · not found</div>
          <h1 className="notfound-title">
            Not <em>yet</em>
            <span className="notfound-period">.</span>
          </h1>
          <p className="notfound-lede">
            This page doesn&apos;t exist. Or it doesn&apos;t exist yet.
            Either way, the one you&apos;re looking for is probably home.
          </p>
          <Link href="/" className="notfound-cta">
            Return to Koine Labs
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
          <div className="notfound-greek" aria-hidden="true">
            κοινή
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
