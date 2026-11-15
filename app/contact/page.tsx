import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact · Koine Labs",
  description: "Write to Koine Labs about investing, partnering, the press or one of our products.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact · Koine Labs", description: "Write to Koine Labs.", url: "/contact" },
};

export default function Contact() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec page-top contact">
        <div className="in">
          <header className="side"><h1 className="side-title">Contact</h1></header>
          <div className="main">
            <p className="mission" id="contact-title">Write to us.</p>
            <p className="lead">About investing or partnering with the lab, for the press, or about Mentat, Annula or Anchor. We read every message and aim to reply within a week.</p>
            <ContactForm />
            <div className="direct">
              <p className="kicker">Or email us directly</p>
              <a className="mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
