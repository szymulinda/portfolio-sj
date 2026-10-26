"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import ProcessStep from "@/components/ProcessStep";
import { process, processSteps } from "@/lib/content";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <SectionShell id="wspolpraca" label="Jak pracujemy">
      <Reveal>
        <h2 className={fraunces.className}>
          {process.heading} <em>{process.headingAccent}</em>
        </h2>
      </Reveal>

      <div ref={containerRef} className="relative mt-12 w-full">
        {/* Pozioma linia z paskiem postępu przewijanym scrollem (motion.dev) */}
        <div className="relative mb-10 h-[2px] w-full overflow-hidden rounded-full bg-[var(--line)]">
          <motion.div
            style={{ scaleX }}
            className="absolute inset-y-0 left-0 h-full w-full origin-left bg-[var(--accent)]"
          />
        </div>

        {/* 4 etapy ułożone poziomo */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} index={index}>
              <ProcessStep item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
