"use client";

import { Children, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FaqItem({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const question = items[0];
  const answer = items.slice(1);

  return (
    <article className="border-b border-[var(--line)] py-6 last:border-b-0 last:pb-0 first:pt-0">
      <button
        type="button"
        className="flex min-h-[44px] w-full items-start justify-between gap-6 text-left transition-colors hover:text-[var(--accent)]"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex-1 font-medium">{question}</span>
        <motion.span
          aria-hidden
          className="select-none text-xl leading-none text-[var(--text-subtle)]"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
