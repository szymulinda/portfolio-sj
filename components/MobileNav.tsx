"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MobileNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-[var(--text)]"
        aria-expanded={open}
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">Menu</span>
        <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
          <motion.span
            animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="block h-[1.5px] w-5 origin-center bg-current"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-[1.5px] w-5 bg-current"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="block h-[1.5px] w-5 origin-center bg-current"
          />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-[var(--line)] bg-[var(--bg)] shadow-lg"
          >
            <div
              className="page-wrap flex flex-col gap-2 py-6"
              onClick={() => setOpen(false)}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
