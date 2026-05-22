import Link from "next/link";

/**
 * Three-column footer. Koine column links to home-page anchors; Legal column
 * links to dedicated routes (/privacy, /terms, /data-ethics).
 */
export function SiteFooter() {
  return (
    <footer>
      <div className="foot-wrap">
        <div className="foot-top">
          <div className="foot-brand foot-col">
            <div className="row">
              <img src="/koine-logo.png" alt="Koine Labs" />
              <span className="n">
                Koine <em>Labs</em>
              </span>
            </div>
            <p>
              <em>Koine Labs</em> builds ambient AI for people who want to live
              with technology that meets them where they are. By fusing
              biosignals into a continuous read of how they actually feel.
            </p>
          </div>

          <div className="foot-col">
            <h4>Koine</h4>
            <ul>
              <li>
                <Link href="/#daybook">Daybook</Link>
              </li>
              <li>
                <Link href="/#manifesto">Manifesto</Link>
              </li>
              <li>
                <Link href="/#waitlist">Waitlist</Link>
              </li>
              <li>
                <a href="mailto:team@koinelabs.com">Contact</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/data-ethics">Data ethics</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; MMXXVI Koine Labs, Inc. &middot; San Francisco</span>
          <span>κοινή &middot; common</span>
        </div>
      </div>
      <span className="greek-mark" aria-hidden="true">
        koine
      </span>
    </footer>
  );
}
