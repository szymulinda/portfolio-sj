import { fraunces } from "@/lib/fonts";
import type { ProcessItem } from "@/lib/content";

export default function ProcessStep({
  item,
  last = false,
}: {
  item: ProcessItem;
  last?: boolean;
}) {
  return (
    <article className={last ? "pb-0" : "border-b border-[var(--line)] pb-12"}>
      <p
        className={`${fraunces.className} text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[var(--accent)]`}
      >
        {item.step}
      </p>
      <h3 className={`${fraunces.className} mt-6 font-semibold`}>{item.title}</h3>
      <p className="body-copy mt-6">{item.description}</p>
    </article>
  );
}
