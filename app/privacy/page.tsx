import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy — Koine Labs",
  description:
    "How Koine Labs handles your data, and what we commit to never doing with it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Privacy"
      title={
        <>
          Privacy<span className="legal-period">.</span>
        </>
      }
      lede="How we handle your data, and what we commit to never doing with it."
      updated="May 22, 2026"
    >
      <p className="legal-note">
        Koine Labs is pre-launch. Neither Daybook nor Koine Wisp are shipping
        yet. This policy covers the koinelabs.com website and the waitlist
        signup only. When products launch, this policy will be revised and
        you&apos;ll be notified before any changes take effect.
      </p>

      <section>
        <h2>What we collect right now</h2>
        <p>
          Just your email address, and only if you join the waitlist. We do not
          run third-party analytics, advertising trackers, or session
          recording. We do not set marketing cookies.
        </p>
        <p>
          Standard server logs (IP address, request timestamp, user agent) are
          retained for up to 30 days for security and abuse prevention, then
          discarded.
        </p>
      </section>

      <section>
        <h2>What we use your email for</h2>
        <ul>
          <li>To notify you when Daybook + Koine Wisp open access.</li>
          <li>To share major product or company updates, infrequently.</li>
          <li>Nothing else.</li>
        </ul>
        <p>
          You can unsubscribe from any email we send with one click. Doing so
          removes you from the waitlist entirely.
        </p>
      </section>

      <section>
        <h2>What we never do</h2>
        <ul>
          <li>We do not sell your data. To anyone.</li>
          <li>We do not share it with advertisers.</li>
          <li>We do not share it with data brokers.</li>
          <li>We do not use it to train third-party AI models.</li>
        </ul>
      </section>

      <section>
        <h2>What we&apos;ll collect when products ship</h2>
        <p>
          This is the part that matters most, and the part still being
          designed. The following is our intent, not yet a binding policy.
        </p>
        <ul>
          <li>
            <strong>Biosignals</strong> from Koine Wisp and from any third-party
            sources you connect (Apple Health, etc.). Always opt-in per signal
            class — you can grant brain, audio, visual, heart, or body
            independently.
          </li>
          <li>
            <strong>Daybook entries</strong> — the read of your inner state
            over time, plus any text or notes you add yourself.
          </li>
          <li>
            <strong>Settings and preferences</strong> — what you&apos;ve
            configured Daybook to do or not do.
          </li>
        </ul>
        <p>
          Where technically possible, inference will happen on-device.
          Aggregated and anonymized data may be used for model improvement only
          if you opt in to that specifically; default is off.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of everything we hold on
            you.
          </li>
          <li>
            <strong>Deletion</strong> — wipe your data, anytime, and we
            actually mean it (we won&apos;t retain backups beyond what&apos;s
            required to restore service availability).
          </li>
          <li>
            <strong>Portability</strong> — export your data in a standard
            format and take it with you.
          </li>
          <li>
            <strong>Correction</strong> — fix anything we have wrong.
          </li>
          <li>
            <strong>Objection</strong> — opt out of any specific use of your
            data without losing access to the product.
          </li>
        </ul>
      </section>

      <section>
        <h2>Where data lives</h2>
        <p>
          Our infrastructure currently runs in the United States. When we open
          to international users, we&apos;ll add region-aware storage
          appropriate to your jurisdiction.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Koine Labs services are not directed at people under 16. We do not
          knowingly collect data from anyone under 16. If you believe a minor
          has joined our waitlist, contact us and we&apos;ll remove them.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          Material changes will be announced by email to anyone on the
          waitlist, at least 30 days before they take effect. Non-material
          changes (typos, clarifications) may be made without notice but will
          be reflected in the &ldquo;Last updated&rdquo; line above.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Privacy questions go to{" "}
          <a href="mailto:team@koinelabs.com">team@koinelabs.com</a>. We aim to
          respond within five business days.
        </p>
      </section>
    </LegalPage>
  );
}
