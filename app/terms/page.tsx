import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms — Koine Labs",
  description:
    "The terms that govern your use of the Koine Labs website and waitlist.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Terms"
      title={
        <>
          Terms<span className="legal-period">.</span>
        </>
      }
      lede="By using this site or joining our waitlist, you agree to the terms below."
      updated="May 22, 2026"
    >
      <p className="legal-note">
        These terms cover the koinelabs.com website and the waitlist signup
        only. When Daybook and Koine Wisp launch, additional product terms
        will apply. You&apos;ll see them and accept them before using either.
      </p>

      <section>
        <h2>Who we are</h2>
        <p>
          Koine Labs is a project building ambient AI for inner state, based
          in Atlanta, Georgia. References to &ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;Koine Labs&rdquo; mean the team behind koinelabs.com.
        </p>
      </section>

      <section>
        <h2>What you can do here</h2>
        <ul>
          <li>Read about what we&apos;re building.</li>
          <li>Join our waitlist by providing your email.</li>
          <li>Contact us about the project.</li>
        </ul>
      </section>

      <section>
        <h2>What you agree to</h2>
        <ul>
          <li>You&apos;re at least 16 years old.</li>
          <li>The email you provide is yours and is accurate.</li>
          <li>
            You will not attempt to break, overload, scrape, or otherwise abuse
            this site.
          </li>
          <li>
            You will not impersonate anyone else or sign up other people
            without their consent.
          </li>
        </ul>
      </section>

      <section>
        <h2>What we promise</h2>
        <ul>
          <li>
            We will use waitlist emails only for product updates and important
            company communications.
          </li>
          <li>
            We will not sell, share, or rent your email address. See the{" "}
            <a href="/privacy">Privacy</a> policy for details.
          </li>
          <li>You can unsubscribe with one click at any time.</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The Koine Labs name, Daybook, Koine Wisp, the κοινή mark, the site
          design, copy, and any associated trademarks are the property of
          Koine Labs. You may not reproduce, distribute, or create derivative
          works of any of it without prior written permission.
        </p>
        <p>
          Quoting short excerpts for criticism, journalism, or research is
          fine and welcomed.
        </p>
      </section>

      <section>
        <h2>No warranties</h2>
        <p>
          This site is provided as-is, without warranty of any kind, express
          or implied. We do our best to keep it accurate and available, but we
          are a pre-launch company and things may change, break, or be wrong.
          We do not warrant that the information here is complete, current, or
          free of error.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Koine Labs and its officers,
          employees, and agents shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out
          of or related to your use of this site. Our total liability for any
          claim arising from your use of this site is limited to $100 USD.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          We reserve the right to remove anyone from the waitlist for any
          reason, including abuse of the site or misuse of communications we
          send. We will notify you if we do.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Georgia,
          without regard to its conflict-of-law principles. Any dispute will
          be resolved in the state or federal courts located in Georgia.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. Material changes will
          be announced by email to anyone on the waitlist, at least 30 days
          before they take effect. Continued use of the site after the
          effective date constitutes acceptance.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these terms go to{" "}
          <a href="mailto:team@koinelabs.com">team@koinelabs.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
