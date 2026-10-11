"use client";

import { Children, useState, type ReactNode } from "react";

export default function FaqItem({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const question = items[0];
  const answer = items.slice(1);

  return (
    <article className="border-b border-[var(--line)] py-6 last:border-b-0 last:pb-0 first:pt-0">
      <button
        type="button"
        className="flex min-h-[44px] w-full items-start justify-between gap-6 text-left"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex-1">{question}</span>
        <span
          aria-hidden
          className={`faq-toggle-icon text-[var(--text-subtle)] ${open ? "is-open" : ""}`}
        >
          +
        </span>
      </button>
      <div className={`faq-answer ${open ? "is-open" : ""}`}>
        <div className="faq-answer-inner">
          <div className="mt-6">{answer}</div>
        </div>
      </div>
    </article>
  );
}
