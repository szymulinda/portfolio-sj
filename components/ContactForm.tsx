"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import { contact, site } from "@/lib/content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get("company") ?? "").trim();
    if (honeypot) return;

    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: { email?: string; message?: string } = {};
    if (!emailPattern.test(email)) nextErrors.email = "Podaj poprawny adres e-mail.";
    if (message.length < 20) nextErrors.message = "Wiadomość musi mieć co najmniej 20 znaków.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    // TODO: podpiąć backend wysyłki (Route Handler + dostawca e-mail).
    // Nie udajemy sukcesu, dopóki endpoint nie istnieje.
    setStatus("error");
  }

  if (status === "success") {
    return (
      <p className="lead mt-6 max-w-xl">
        Dziękuję. Odpowiem w ciągu jednego dnia roboczego.
      </p>
    );
  }

  const field =
    "mt-2 w-full border-b border-[var(--line)] bg-transparent py-3 text-[0.95rem] text-[var(--text)] outline-none focus:border-[var(--line-strong)]";

  return (
    <form onSubmit={onSubmit} className="relative mt-6 max-w-xl space-y-6" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Strona
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="block">
        <span className="label">Imię</span>
        <input name="name" required className={field} />
      </label>
      <label className="block">
        <span className="label">E-mail</span>
        <input name="email" type="email" required className={field} />
        {errors.email ? (
          <span className="mt-2 block text-[0.75rem] text-[var(--accent)]">{errors.email}</span>
        ) : null}
      </label>
      <label className="block">
        <span className="label">Wiadomość</span>
        <textarea name="message" rows={5} required minLength={20} className={`${field} resize-none`} />
        {errors.message ? (
          <span className="mt-2 block text-[0.75rem] text-[var(--accent)]">{errors.message}</span>
        ) : null}
      </label>
      {status === "error" ? (
        <p className="body-copy">
          Wysyłka nie doszła. Napisz bezpośrednio na{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      ) : null}
      <Button type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Wysyłanie..." : contact.submit}
      </Button>
    </form>
  );
}
