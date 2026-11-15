"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_EMAIL, LEGAL, NAV, NORTH_STAR } from "../lib/site";

type Item = { href: string; label: string };

function Column({ title, items, path }: { title: string; items: readonly Item[]; path: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} prefetch={false} aria-current={path === href ? "page" : undefined}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  const path = usePathname();
  return (
    <footer className="site-footer">
      <div className="foot-in">
        <div className="foot-brand">
          <Link className="site-logo" href="/" aria-label="Koine Labs, home" prefetch={false}>
            <img src="/assets/koine-mark.svg" alt="" width={100} height={100} loading="lazy" />
            Koine Labs
          </Link>
          <p>{NORTH_STAR}</p>
          <p className="foot-mail"><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
        <nav className="foot-nav" aria-label="Footer">
          <Column title="Products" items={NAV.slice(0, 3)} path={path} />
          <Column title="The lab" items={NAV.slice(3)} path={path} />
          <Column title="Policies" items={LEGAL} path={path} />
        </nav>
        <p className="foot-legal">
          <span>© {new Date().getFullYear()} The House of Agrawal LLC. Koine Labs, Atlanta, Georgia.</span>
          <span>No cookies. No advertising trackers.</span>
        </p>
      </div>
    </footer>
  );
}
