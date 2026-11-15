import LegalPage, { legalMetadata, type Part } from "../components/LegalPage";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata = legalMetadata(
  "Security",
  "How to report a security problem in koinelabs.com or in one of the Koine Labs apps.",
  "/security",
);

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Security%20report`}>{CONTACT_EMAIL}</a>;

const parts: Part[] = [
  {
    id: "report",
    title: "Reporting a problem",
    body: (
      <>
        <p>If you find a security problem in this website or in one of our apps, please email {mail} with &ldquo;Security report&rdquo; in the subject. Include what you found, where, and the steps to see it again.</p>
        <p>We will confirm that we have your report within five working days, keep you told of progress, and credit you when it is fixed if you would like us to. We do not run a paid bug bounty.</p>
      </>
    ),
  },
  {
    id: "rules",
    title: "Please",
    body: (
      <ul>
        <li>give us reasonable time to fix the problem before telling anyone else;</li>
        <li>use only your own accounts and data, and stop as soon as you reach anyone else&rsquo;s;</li>
        <li>do not degrade the service, send spam, or try to trick the people who run it;</li>
        <li>do not keep or share any personal information you come across.</li>
      </ul>
    ),
  },
  {
    id: "safe",
    title: "Research in good faith",
    body: <p>If you follow these rules, we will treat your research as authorised, work with you, and not take legal action against you for it.</p>,
  },
  {
    id: "file",
    title: "For automated tools",
    body: <p>The same details are published in machine-readable form at <a href="/.well-known/security.txt"><code>/.well-known/security.txt</code></a>.</p>,
  },
];

export default function Security() {
  return (
    <LegalPage
      title="Security"
      summary="Found a security problem? Email us, give us time to fix it, and leave other people's data alone. We will work with you and credit you."
      parts={parts}
    />
  );
}
