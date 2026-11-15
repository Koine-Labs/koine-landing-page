"use client";

import { track } from "../lib/analytics";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "../lib/site";
import { useFieldCheck } from "./useFieldCheck";

export const TOPICS = [
  { value: "invest", label: "Investing or partnering" },
  { value: "press", label: "Press" },
  { value: "product", label: "One of our products" },
  { value: "other", label: "Something else" },
] as const;

type Status = { kind: "idle" | "sending" | "done" | "error"; text: string; mailto?: string };
type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

const MESSAGES = {
  email: (el: Field) => (el.validity.valueMissing ? "Enter your email address, so we can reply." : "Enter an email address like name@example.com."),
  topic: () => "Choose what your message is about.",
  message: (el: Field) => (el.validity.valueMissing ? "Write your message." : "Write a little more: at least 10 characters."),
};

export default function ContactForm() {
  const started = useRef(Date.now());
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const { errors, onInput, onBlur, checkAll, describe } = useFieldCheck(MESSAGES);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (status.kind === "sending" || !checkAll(form)) return;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus({ kind: "sending", text: "Sending…" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, elapsed: Date.now() - started.current }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        track("contact_message_sent", { topic: data.topic });
        setStatus({ kind: "done", text: "Thank you. Your message has reached us, and we will reply to the address you gave." });
        return;
      }
      if (body.fallback === "mailto") {
        // the form is not connected on this server yet: offer the same message as an email instead
        const topic = TOPICS.find((t) => t.value === data.topic)?.label ?? "A message";
        const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(data.message)}`;
        setStatus({ kind: "error", text: "The form could not send this just now.", mailto });
        return;
      }
      throw new Error(body.error || "");
    } catch (err) {
      const text = err instanceof Error && err.message ? err.message : `That didn't go through. Please try again, or write to ${CONTACT_EMAIL}.`;
      setStatus({ kind: "error", text });
    }
  }

  return (
    <form className="form contact-form" method="post" action="/api/contact" noValidate onSubmit={submit} aria-labelledby="contact-title">
      <div className="field">
        <label htmlFor="c-name">Your name <span className="opt">(optional)</span></label>
        <input id="c-name" name="name" type="text" maxLength={120} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="c-email">Email address</label>
        <input id="c-email" name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email"
          autoCapitalize="none" autoCorrect="off" spellCheck={false} onInput={onInput} onBlur={onBlur} {...describe("email")} />
        {errors.email ? <p className="err" id="email-error"><span aria-hidden="true">! </span>{errors.email}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="c-topic">What is it about?</label>
        <select id="c-topic" name="topic" required defaultValue="" onInput={onInput} onBlur={onBlur} {...describe("topic")}>
          <option value="" disabled>Choose one</option>
          {TOPICS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
        {errors.topic ? <p className="err" id="topic-error"><span aria-hidden="true">! </span>{errors.topic}</p> : null}
      </div>
      <div className="field">
        <label htmlFor="c-message">Message</label>
        <textarea id="c-message" name="message" required minLength={10} maxLength={5000} rows={7}
          onInput={onInput} onBlur={onBlur} {...describe("message")} />
        {errors.message ? <p className="err" id="message-error"><span aria-hidden="true">! </span>{errors.message}</p> : null}
      </div>
      <div className="hp">
        <label htmlFor="c-website">Leave this empty</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="fine">We use your details only to read and answer your message. See our <Link href="/privacy">privacy policy</Link>.</p>
      <div>
        <button className="btn" type="submit" disabled={status.kind === "sending"}>Send message</button>
      </div>
      <p className={`form-status ${status.kind}`} role="status">
        {status.text}
        {status.mailto ? <> <a href={status.mailto}>Send it by email instead</a>.</> : null}
      </p>
    </form>
  );
}
