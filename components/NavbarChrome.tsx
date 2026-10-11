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
    <header className={`site-header relative sticky top-0 z-30 ${scrolled ? "is-scrolled" : ""}`}>
      {children}
    </header>
  );
}
