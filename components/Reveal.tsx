"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Indeks kaskady (0-4), potem bez dodatkowego opóźnienia. */
  index?: number;
  as?: "div" | "li" | "article" | "span" | "section";
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className = "",
  index = 0,
  as: Tag = "div",
  delay,
  y = 20,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const calculatedDelay = delay ?? Math.min(Math.max(index, 0), 4) * 0.08;

  const MotionComponent = motion[Tag] as typeof motion.div;
  const classes = `reveal ${className}`.trim();

  if (shouldReduceMotion) {
    return <Tag className={classes}>{children}</Tag>;
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.5,
        delay: calculatedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={classes}
    >
      {children}
    </MotionComponent>
  );
}
