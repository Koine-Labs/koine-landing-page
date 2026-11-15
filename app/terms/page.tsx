import LegalPage, { legalMetadata, type Part } from "../components/LegalPage";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata = legalMetadata(
  "Terms of use",
  "The terms for using koinelabs.com, its waitlists and its contact form.",
  "/terms",
);

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const parts: Part[] = [
  {
    id: "scope",
    title: "What these terms cover",
    body: (
      <>
        <p>These terms cover this website, koinelabs.com, including its waitlists and contact form. By using the site you agree to them.</p>
        <p>They do not cover our apps. Annula has its own terms on <a href="https://useannula.com/terms">useannula.com</a>. Apps we test through Apple&rsquo;s TestFlight are also subject to Apple&rsquo;s terms and to any terms shown in the app. When an app opens to the public, its own terms will be shown before you use it.</p>
      </>
    ),
  },
  {
    id: "who",
    title: "Who we are",
    body: <p>Koine Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a research lab based in Atlanta, Georgia, in the United States. It is operated by The House of Agrawal LLC. You can reach us at {mail}.</p>,
  },
  {
    id: "use",
    title: "Using the site",
    body: (
      <>
        <p>You are welcome to read the site, share links to it, join a waitlist and write to us. When you do, you agree that:</p>
        <ul>
          <li>you are at least 16;</li>
          <li>the email address you give is yours;</li>
          <li>you will not sign other people up without their permission;</li>
          <li>you will not try to break, overload or get around the site&rsquo;s security, or send automated sign-ups or messages;</li>
          <li>you will not copy the site&rsquo;s text or images in bulk, including to train AI models.</li>
        </ul>
      </>
    ),
  },
  {
    id: "plans",
    title: "Plans, not promises",
    body: (
      <>
        <p>This site describes research and products in development. What a product does today is described as such. Everything under &ldquo;What we want to build&rdquo; and &ldquo;Where it is going&rdquo;, and every design drawing, shows what we are working toward. It is not built yet, may change, and may never be built.</p>
        <p>Screenshots and figures in drawings use sample data unless they say otherwise. Joining a waitlist does not guarantee access to a product or a date when it opens.</p>
      </>
    ),
  },
  {
    id: "advice",
    title: "Not investment advice, and not an offer",
    body: (
      <>
        <p>Nothing on this site is investment, financial, legal or tax advice. That includes the descriptions of Annula and any company, figure or price shown in its screenshots and drawings, which are examples.</p>
        <p>Nothing on this site is an offer to sell, or a request for an offer to buy, any security or interest in Koine Labs. Statements about what we plan to do are forward-looking: they reflect what we intend today, and the outcome may be different.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "Our work and our names",
    body: (
      <>
        <p>The site&rsquo;s text, drawings, screenshots and design, and the names and marks Koine Labs, Mentat, Annula and Anchor, belong to Koine Labs. You may quote short passages with a link back, for commentary, reporting or research. For anything more, ask us first.</p>
        <p>If you send us ideas or feedback, you agree that we may use them without owing you anything. Please do not send us anything you consider confidential.</p>
      </>
    ),
  },
  {
    id: "links",
    title: "Links to other sites",
    body: <p>Where we link to another site, we do so for your convenience. We are not responsible for its content or its privacy practices.</p>,
  },
  {
    id: "warranty",
    title: "No warranties",
    body: <p>The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. We work to keep it accurate and online, but to the extent the law allows, we make no promises that it is complete, current, free of errors or always available.</p>,
  },
  {
    id: "liability",
    title: "Limit of liability",
    body: <p>To the extent the law allows, Koine Labs, The House of Agrawal LLC and the people who run them are not liable for indirect, incidental, special or consequential losses, or for lost profits or data, arising from your use of the site. Our total liability for any claim about the site is limited to US$100. Some places do not allow these limits, so they may not all apply to you.</p>,
  },
  {
    id: "end",
    title: "Removing access",
    body: <p>We may remove anyone from a waitlist, or block access to the site, if they misuse it. You can leave a waitlist at any time with the unsubscribe link in any email from us.</p>,
  },
  {
    id: "law",
    title: "Governing law",
    body: <p>These terms are governed by the laws of the State of Georgia, in the United States, without regard to its conflict-of-law rules. Disputes will be decided in the state or federal courts located in Georgia, unless the law where you live gives you the right to bring them there.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>When these terms change, we update the date at the top of this page. Changes apply from that date. If a change matters to people on a waitlist, we will email them about it first.</p>,
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions about these terms go to {mail}.</p>,
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of use"
      summary="Use the site in good faith. What we describe as planned is not built yet, nothing here is investment advice or an offer of securities, and the work on it belongs to Koine Labs."
      parts={parts}
    />
  );
}
