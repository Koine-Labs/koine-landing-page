"use client";

// Field validation that waits for the reader: a field is checked when they leave it (and only if they changed it),
// errors clear as soon as the value is fixed, and a failed submit moves focus to the first field that needs attention.
// The browser's own rules (required, type="email", minLength, maxLength) decide what is valid.
import { useCallback, useState, type FocusEvent, type FormEvent } from "react";

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type Messages = Record<string, (el: Field) => string>;

export function useFieldCheck(messages: Messages) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [edited, setEdited] = useState<Record<string, boolean>>({});

  const check = useCallback((el: Field) => {
    const msg = el.validity.valid ? "" : (messages[el.name]?.(el) ?? el.validationMessage);
    setErrors((e) => (e[el.name] === msg ? e : { ...e, [el.name]: msg }));
    return msg;
  }, [messages]);

  const onInput = useCallback((e: FormEvent<Field>) => {
    const el = e.currentTarget;
    setEdited((d) => (d[el.name] ? d : { ...d, [el.name]: true }));
    if (errors[el.name] && el.validity.valid) setErrors((x) => ({ ...x, [el.name]: "" }));
  }, [errors]);

  const onBlur = useCallback((e: FocusEvent<Field>) => {
    if (edited[e.currentTarget.name]) check(e.currentTarget);
  }, [edited, check]);

  // returns true when every field passes; otherwise shows every message and focuses the first failing field
  const checkAll = useCallback((form: HTMLFormElement) => {
    let first: Field | null = null;
    for (const el of Array.from(form.elements)) {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) continue;
      if (!el.name || el.closest(".hp")) continue;
      if (check(el) && !first) first = el;
    }
    first?.focus();
    return !first;
  }, [check]);

  // the attributes that tie a field to its message
  const describe = (name: string, hint?: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [hint, errors[name] ? `${name}-error` : ""].filter(Boolean).join(" ") || undefined,
  });

  return { errors, onInput, onBlur, checkAll, describe };
}
