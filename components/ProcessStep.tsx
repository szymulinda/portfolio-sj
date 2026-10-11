import { fraunces } from "@/lib/fonts";
import type { ProcessItem } from "@/lib/content";
import type { CSSProperties } from "react";

export default function ProcessStep({
  item,
  last = false,
  index = 0,
}: {
  item: ProcessItem;
  last?: boolean;
  index?: number;
}) {
  return (
    <article className={last ? "relative pb-0 pl-8" : "relative border-b border-[var(--line)] pb-12 pl-8"}>
      <p
        className={`${fraunces.className} process-step-num text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[var(--accent)]`}
        style={{ "--i": index } as CSSProperties}
      >
        {item.step}
      </p>
      <h3 className={`${fraunces.className} mt-6 font-semibold`}>{item.title}</h3>
      <p className="body-copy mt-6">{item.description}</p>
    </article>
  );
}
