import { fraunces } from "@/lib/fonts";
import type { ProcessItem } from "@/lib/content";

export default function ProcessStep({
  item,
}: {
  item: ProcessItem;
  index?: number;
  last?: boolean;
}) {
  return (
    <article className="relative flex flex-col">
      <span
        className={`${fraunces.className} text-[clamp(2.2rem,3.5vw,3rem)] font-semibold leading-none text-[var(--accent)] select-none`}
      >
        {item.step}
      </span>
      <h3 className={`${fraunces.className} mt-4 text-[20px] font-semibold text-[var(--text)]`}>
        {item.title}
      </h3>
      <p className="body-copy mt-3 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">
        {item.description}
      </p>
    </article>
  );
}
