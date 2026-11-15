"use client";

import { track } from "../lib/analytics";
import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";
import { CONTACT_EMAIL, PRODUCTS, type ProductKey } from "../lib/site";
import { useFieldCheck } from "./useFieldCheck";

type Status = { kind: "idle" | "sending" | "done" | "error"; text: string };

const MESSAGES = {
  email: (el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) =>
    el.validity.valueMissing ? "Enter your email address." : "Enter an email address like name@example.com.",
};

export default function WaitlistForm({ product, titleId, button }: { product: ProductKey; titleId: string; button: string }) {
  const name = PRODUCTS[product].name;
  const id = useId();
  const started = useRef(Date.now());
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });
  const { errors, onInput, onBlur, checkAll, describe } = useFieldCheck(MESSAGES);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (status.kind === "sending" || !checkAll(form)) return;
    const data = new FormData(form);
    setStatus({ kind: "sending", text: "Sending…" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          product,
          news: data.get("news") === "yes",
          website: data.get("website"),
          elapsed: Date.now() - started.current,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "");
      const news = data.get("news") === "yes";
      form.reset();
      track("waitlist_joined", { product, news });
      setStatus({ kind: "done", text: `You're on the list. We'll email you when there is news about ${name}.` });
    } catch (err) {
      const text = err instanceof Error && err.message ? err.message : `That didn't go through. Please try again, or write to ${CONTACT_EMAIL}.`;
      setStatus({ kind: "error", text });
    }
  }

  return (
    <form className="form signup-form" method="post" action="/api/waitlist" noValidate onSubmit={submit} aria-labelledby={titleId}>
      <div className="field">
        <label htmlFor={`${id}-email`}>Email address</label>
        <div className="inline-row">
          <input id={`${id}-email`} name="email" type="email" required maxLength={254} autoComplete="email" inputMode="email"
            autoCapitalize="none" autoCorrect="off" spellCheck={false} enterKeyHint="send"
            onInput={onInput} onBlur={onBlur} {...describe("email", `${id}-fine`)} />
          <button className="btn" type="submit" disabled={status.kind === "sending"}>{button}</button>
        </div>
        {errors.email ? <p className="err" id="email-error"><span aria-hidden="true">! </span>{errors.email}</p> : null}
      </div>
      <div className="check">
        <input id={`${id}-news`} name="news" type="checkbox" value="yes" />
        <label htmlFor={`${id}-news`}>Also send me occasional news from Koine Labs</label>
      </div>
      <div className="hp">
        <label htmlFor={`${id}-website`}>Leave this empty</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="fine" id={`${id}-fine`}>
        We will only email you about {name}, and about the lab if you tick the box. Every email has a one-click unsubscribe. See
        our <Link href="/privacy">privacy policy</Link>.
      </p>
      <p className={`form-status ${status.kind}`} role="status">{status.text}</p>
    </form>
  );
}
