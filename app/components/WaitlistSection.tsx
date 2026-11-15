import type { ProductKey } from "../lib/site";
import WaitlistForm from "./WaitlistForm";

const COPY: Record<ProductKey, { title: string; text: string; button: string }> = {
  mentat: {
    title: "Follow Mentat",
    text: "Mentat is a research prototype. Leave your email and we will write when there is something you can try, or news worth sharing.",
    button: "Follow Mentat",
  },
  annula: {
    title: "Join the Annula waitlist",
    text: "Annula is in private beta. Leave your email and we will write when there is a place for you, or when it opens to everyone.",
    button: "Join the waitlist",
  },
  anchor: {
    title: "Join the Anchor waitlist",
    text: "Anchor is in testing on iPhone. Leave your email and we will write when it opens.",
    button: "Join the waitlist",
  },
};

export default function WaitlistSection({ product }: { product: ProductKey }) {
  const { title, text, button } = COPY[product];
  const titleId = `signup-${product}`;
  return (
    <section className="sec signup" aria-labelledby={titleId}>
      <div className="in">
        <header className="side"><h2>Stay in touch</h2></header>
        <div className="main">
          <h3 className="signup-title" id={titleId}>{title}</h3>
          <p className="signup-text">{text}</p>
          <WaitlistForm product={product} titleId={titleId} button={button} />
        </div>
      </div>
    </section>
  );
}
