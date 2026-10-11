"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Indeks kaskady (0-3), potem bez dodatkowego opóźnienia. */
  index?: number;
  as?: "div" | "li" | "article" | "span";
};

export default function Reveal({
  children,
  className = "",
  index = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const stagger = Math.min(Math.max(index, 0), 3);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-visible");
      return;
    }

    let firstCallback = true;
    let timeoutId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          firstCallback = false;
          return;
        }

        // Elementy widoczne juz przy starcie: krotkie opoznienie, zeby ruch dalo sie zauwazyc.
        const delay = firstCallback ? 200 : 0;
        firstCallback = false;

        timeoutId = window.setTimeout(() => {
          node.classList.add("is-visible");
        }, delay);
        observer.disconnect();
      },
      { threshold: 0.3, rootMargin: "0px 0px -18% 0px" },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      style={{ "--i": stagger } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
