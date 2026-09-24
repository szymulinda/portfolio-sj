"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function NavbarChrome({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative sticky top-0 z-30 border-b border-[var(--line)] ${
        scrolled ? "bg-[var(--bg)]/85 backdrop-blur-md" : "bg-[var(--bg)]"
      }`}
    >
      {children}
    </header>
  );
}
