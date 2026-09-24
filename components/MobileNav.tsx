"use client";

import { useState, type ReactNode } from "react";

export default function MobileNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center text-[var(--text)]"
        aria-expanded={open}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col gap-1.5">
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
          <span className="block h-px w-5 bg-current" />
        </span>
      </button>
      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-[var(--line)] bg-[var(--bg)]">
          <div
            className="page-wrap flex flex-col gap-6 py-6"
            onClick={() => setOpen(false)}
          >
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}
