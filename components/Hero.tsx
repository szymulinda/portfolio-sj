"use client";

import { motion, useReducedMotion } from "motion/react";
import { fraunces } from "@/lib/fonts";
import Button from "@/components/Button";
import HeroAccent from "@/components/HeroAccent";
import { hero, CALENDAR_URL } from "@/lib/content";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="py-[40px] md:py-[64px]">
        <div className="page-wrap">
          <h1 className={`${fraunces.className} max-w-[16ch] sm:max-w-[20ch]`}>
            {hero.line1}
            <br />
            <HeroAccent>{hero.accent}</HeroAccent>
            {hero.line2rest}
          </h1>
          <p className="lead mt-6 max-w-[70ch]">{hero.support}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
              {hero.primaryCta}
            </Button>
            <Button href="#cennik" variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-[40px] md:py-[64px]">
      <div className="page-wrap">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`${fraunces.className} max-w-[16ch] sm:max-w-[20ch]`}
        >
          {hero.line1}
          <br />
          <HeroAccent>{hero.accent}</HeroAccent>
          {hero.line2rest}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lead mt-6 max-w-[70ch]"
        >
          {hero.support}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            {hero.primaryCta}
          </Button>
          <Button href="#cennik" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
