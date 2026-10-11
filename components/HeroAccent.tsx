"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HeroAccent({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const frame = requestAnimationFrame(() => {
      node.classList.add("is-lit");
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <em ref={ref} className="hero-accent">
      {children}
    </em>
  );
}
