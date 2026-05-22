import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Data ethics — Koine Labs",
  description:
    "Our commitments for handling biosignal data. The most intimate data a person can produce should be treated as such.",
};

export default function DataEthicsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Data ethics"
      title={
        <>
          Data <em>ethics</em>
          <span className="legal-period">.</span>
        </>
      }
      lede="Biosignals are the most intimate data a person can produce. These are the commitments we will hold ourselves to as we build."
      updated="May 22, 2026"
    >
      <p className="legal-note">
        Koine Labs is pre-launch. These are our intent commitments — published
        before the products ship so they can be held against us, not after.
        They will harden into binding policy by the time Daybook and Koine
        Wisp reach the first cohort.
      </p>

      <section>
        <h2>Why this matters</h2>
        <p>
          Brain activity, voice prosody, ambient audio and visual, heart
          rhythm, body signals — these reveal you in ways your conscious words
          cannot, and often before you yourself know what you feel. Building
          infrastructure that reads them means building infrastructure for one
          of the most private spaces in human life.
        </p>
        <p>
          We will not treat that lightly.
        </p>
      </section>

      <section>
        <h2>On-device by default</h2>
        <p>
          Wherever the hardware allows it, inference happens on your device.
          Raw signals do not leave without explicit, granular consent, and
          even derived state does not leave for any purpose other than
          delivering Daybook to you on your own devices.
        </p>
      </section>

      <section>
        <h2>Consent at the signal level</h2>
        <p>
          Each of the five inputs — brain, audio, visual, heart, body — is
          consented to independently. You can grant brain and not audio,
          heart and not visual, any combination. There is no all-or-nothing
          gate. The default for any new signal class is off.
        </p>
        <p>
          Granting consent is reversible at any time, signal by signal.
          Revoking a signal deletes the historical data for that signal as
          well, unless you explicitly choose to retain it.
        </p>
      </section>

      <section>
        <h2>No advertising. Ever.</h2>
        <p>
          We will not sell ads against your inner state. Your biosignals are
          not a product. Our revenue comes directly from people who want to
          use Daybook and Koine Wisp.
        </p>
        <p>
          This commitment is structural, not a marketing line. Building an
          advertising business on biosignals would require a different
          company.
        </p>
      </section>

      <section>
        <h2>What we will never do</h2>
        <ul>
          <li>Sell, license, or share your biosignals with advertisers.</li>
          <li>
            Sell, license, or share your biosignals with employers,
            insurers, or financial institutions.
          </li>
          <li>
            Disclose your data to law enforcement except under valid legal
            process, and only after notifying you when legally permitted to do
            so.
          </li>
          <li>
            Use your data to score, rank, or judge you against other users.
          </li>
          <li>
            Train third-party AI models on your biosignals.
          </li>
        </ul>
      </section>

      <section>
        <h2>Your data is yours</h2>
        <ul>
          <li>
            <strong>Export</strong> — your entire history, in a standard
            open format, anytime you want it.
          </li>
          <li>
            <strong>Delete</strong> — and we mean it. Deletion removes the
            data from our active systems immediately, and from any backups
            within 30 days. We do not keep shadow copies.
          </li>
          <li>
            <strong>Take it elsewhere</strong> — when an ecosystem of inner-
            state tools exists, you should be able to move between them.
          </li>
        </ul>
      </section>

      <section>
        <h2>Research and model improvement</h2>
        <p>
          If we ever ask you to contribute data to research or to model
          improvement, it will be:
        </p>
        <ul>
          <li>Opt-in, never opt-out.</li>
          <li>Reversible — you can withdraw at any time.</li>
          <li>
            Aggregated and anonymized to the maximum technical extent
            possible.
          </li>
          <li>
            Tied to a specific, named purpose — not a blanket grant for any
            future use.
          </li>
        </ul>
        <p>
          We will publish what we learn from contributed data, even when the
          findings complicate our own positioning.
        </p>
      </section>

      <section>
        <h2>The dream layer</h2>
        <p>
          Our long horizon includes reading from sleep and dream states. This
          is the most sensitive register of human experience and we will not
          ship into it without:
        </p>
        <ul>
          <li>External ethics review by domain experts.</li>
          <li>Consent design that is genuinely informed, not buried.</li>
          <li>
            A meaningful waiting period between when a person enables dream
            reading and when their data is used for anything beyond their own
            view.
          </li>
        </ul>
      </section>

      <section>
        <h2>Transparency</h2>
        <p>
          When Daybook and Koine Wisp are live, we will publish quarterly
          transparency reports covering:
        </p>
        <ul>
          <li>Government and law enforcement data requests received.</li>
          <li>Aggregate consent rates across signal classes.</li>
          <li>Any security incidents and what we did about them.</li>
          <li>
            Material changes to how data is processed, including model
            updates that change what the system infers.
          </li>
        </ul>
      </section>

      <section>
        <h2>Accountability</h2>
        <p>
          By first launch, we will have:
        </p>
        <ul>
          <li>
            An external ethics advisory board with named members, public
            charter, and binding influence over product decisions in this
            area.
          </li>
          <li>
            A standing bug bounty for privacy and security issues, including
            misuse of internal access.
          </li>
          <li>
            An internal review process for any feature that touches biosignal
            data, with veto power held outside the product team.
          </li>
        </ul>
      </section>

      <section>
        <h2>Hold us to this</h2>
        <p>
          If you believe we have violated any of these commitments, contact{" "}
          <a href="mailto:team@koinelabs.com">team@koinelabs.com</a>{" "}
          directly. We will respond and, if you wish, publish our response.
        </p>
      </section>
    </LegalPage>
  );
}
