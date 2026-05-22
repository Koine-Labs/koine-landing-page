import Link from "next/link";

/**
 * Floating stained-glass nav pill. Anchor links (#daybook, #northstar, etc.)
 * resolve against the home page; on non-home routes they navigate to "/" first
 * and then scroll to the section.
 */
export function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-pill">
        <Link href="/" className="brand">
          <img src="/koine-logo.png" alt="Koine Labs" />
          <span>Koine</span>
          <span className="by">Labs</span>
        </Link>
        <div className="navlinks">
          <Link href="/#daybook">Daybook</Link>
          <Link href="/#northstar">Northstar</Link>
          <Link href="/#manifesto">Manifesto</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link href="/#waitlist" className="nav-cta">
          Join waitlist
          <svg
            viewBox="0 0 14 14"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
