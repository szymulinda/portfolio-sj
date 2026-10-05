"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import { contact, site } from "@/lib/content";
import { InlineLink } from "@/components/InlineLink";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>(
    {}
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (name.length < 2 || name.length > 100) {
      nextErrors.name = "Podaj imię (2-100 znaków).";
    }
    if (!emailPattern.test(email)) nextErrors.email = "Podaj poprawny adres e-mail.";
    if (message.length < 20 || message.length > 5000) {
      nextErrors.message = "Wiadomość musi mieć od 20 do 5000 znaków.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
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
        <input name="name" required minLength={2} maxLength={100} className={field} />
        {errors.name ? (
          <span className="mt-2 block text-[0.875rem] text-[var(--accent)]">{errors.name}</span>
        ) : null}
      </label>
      <label className="block">
        <span className="label">E-mail</span>
        <input name="email" type="email" required className={field} />
        {errors.email ? (
          <span className="mt-2 block text-[0.875rem] text-[var(--accent)]">{errors.email}</span>
        ) : null}
      </label>
      <label className="block">
        <span className="label">Wiadomość</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={20}
          maxLength={5000}
          className={`${field} resize-none`}
        />
        {errors.message ? (
          <span className="mt-2 block text-[0.875rem] text-[var(--accent)]">{errors.message}</span>
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
      <p className="mx-auto max-w-[70ch] text-[13px] leading-relaxed text-[var(--text-muted)]">
        Wysyłając wiadomość, zgadzasz się na przetwarzanie podanych danych w celu odpowiedzi
        na zapytanie. Szczegóły w{" "}
        <InlineLink href="/polityka-prywatnosci">polityce prywatności</InlineLink>.
      </p>
      <Button type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Wysyłanie..." : contact.submit}
      </Button>
    </form>
  );
}
