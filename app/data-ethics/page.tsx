import LegalPage, { legalMetadata, type Part } from "../components/LegalPage";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata = legalMetadata(
  "Data ethics",
  "The commitments Koine Labs holds itself to while it builds Mentat, Annula and Anchor.",
  "/data-ethics",
);

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const parts: Part[] = [
  {
    id: "why",
    title: "Why we write this down",
    body: (
      <>
        <p>Our products work close to people. Mentat would see where you look and what your hands do. Annula keeps what you believe about the businesses you own. Anchor learns how your days go, from sources such as your calendar, your location and your sleep.</p>
        <p>That is personal information of the most sensitive kind. These are the commitments we hold ourselves to while we build, written down before the products are public so that you can hold us to them. Each product&rsquo;s own privacy notice gives the legal detail.</p>
      </>
    ),
  },
  {
    id: "choose",
    title: "You choose what each product sees",
    body: <p>Every source of information is off until you turn it on, and you can turn any of them off again. Anchor already works this way: each source is opt-in. Turning a source off stops it being collected, and you can ask for what was already collected to be deleted.</p>,
  },
  {
    id: "device",
    title: "On your device first",
    body: <p>Wherever the work can be done on your own device, it is. Anchor keeps its record of your days on your iPhone and, if you choose, on a server that you own, not on ours. For Mentat, our aim is that images from its cameras are processed on the device and not kept.</p>,
  },
  {
    id: "ads",
    title: "No advertising, and no selling",
    body: <p>We do not sell personal information, use it for advertising, or pass it to data brokers. We will not give it to employers, insurers or lenders. Our products are paid for by the people who use them.</p>,
  },
  {
    id: "yours",
    title: "Your information is yours",
    body: <p>You can export what a product holds about you in a standard format, and you can delete it. Deleting means deleted: from the product straight away, and from backups as soon as they expire.</p>,
  },
  {
    id: "ai",
    title: "Clear about AI",
    body: <p>When a product shows you writing produced by AI, it says so. In Annula, every figure opens to the filing or price it came from, so you can check it for yourself.</p>,
  },
  {
    id: "research",
    title: "Research only with your permission",
    body: <p>We will not use your information to train models or for research unless you agree to it, for a purpose we name, and you can change your mind at any time. We will not use it to train anyone else&rsquo;s models.</p>,
  },
  {
    id: "sensitive",
    title: "Sensitive information handled as sensitive",
    body: <p>Eye movement, images of your face and hands, health, location and money all get extra care. Before any product that collects them opens to the public, it will publish its own privacy notice and ask for your explicit consent wherever the law requires it, including under laws on biometric and health information.</p>,
  },
  {
    id: "law",
    title: "When the law asks",
    body: <p>We will disclose information to authorities only when the law requires it, and we will tell the person affected first, unless we are legally prevented from doing so.</p>,
  },
  {
    id: "changes",
    title: "If we change these",
    body: <p>We will not weaken these commitments quietly. If we change them, we will update this page and email the people who use our products before the change takes effect. If you think we have fallen short of any of them, write to {mail}.</p>,
  },
];

export default function DataEthics() {
  return (
    <LegalPage
      title="Data ethics"
      summary="What we promise about the information our products work with: you choose what they see, it stays on your device where it can, it is never sold or used for advertising, and you can take it with you or delete it."
      parts={parts}
    />
  );
}
