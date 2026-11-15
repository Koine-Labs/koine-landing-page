import LegalPage, { legalMetadata, type Part } from "../components/LegalPage";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata = legalMetadata(
  "Accessibility",
  "How koinelabs.com is built to be usable by everyone, where it falls short, and how to tell us.",
  "/accessibility",
);

const mail = <a href={`mailto:${CONTACT_EMAIL}?subject=Accessibility`}>{CONTACT_EMAIL}</a>;

const parts: Part[] = [
  {
    id: "aim",
    title: "Our aim",
    body: <p>We want everyone to be able to read this site and use its forms. We build it to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.</p>,
  },
  {
    id: "done",
    title: "What we have done",
    body: (
      <ul>
        <li>Every page has a clear heading structure, labelled regions and a link to skip to the content.</li>
        <li>Everything works with a keyboard, including the menu and the forms, with a visible outline on the item in focus.</li>
        <li>Every drawing and screenshot has a text description. For the design drawings, it includes the labels written inside the drawing.</li>
        <li>Form fields have visible labels, and errors are explained in words next to the field, not by colour alone.</li>
        <li>Text can be enlarged to 200% without losing content, and the layout works from a small phone to a wide screen.</li>
        <li>Nothing moves or flashes, and the site respects a request for reduced motion.</li>
      </ul>
    ),
  },
  {
    id: "limits",
    title: "Where it falls short",
    body: (
      <ul>
        <li>The labels inside the design drawings are small on a phone. Their text descriptions carry the same words, and you can zoom in on the drawings.</li>
        <li>The app screenshots contain small text. Their descriptions say what each screen shows.</li>
        <li>The site has not yet been checked by an independent accessibility auditor.</li>
      </ul>
    ),
  },
  {
    id: "tell",
    title: "Tell us",
    body: <p>If anything on the site is hard to use, or you need it in another form, write to {mail}. Tell us the page and what got in the way. We aim to reply within five working days.</p>,
  },
];

export default function Accessibility() {
  return (
    <LegalPage
      title="Accessibility"
      summary="We build this site to meet WCAG 2.2 level AA. Here is what that covers, where we know it falls short, and how to tell us about anything else."
      parts={parts}
    />
  );
}
