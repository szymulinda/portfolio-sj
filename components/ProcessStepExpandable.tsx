import { fraunces } from "@/lib/fonts";

export default function ProcessStepExpandable({
  step,
  title,
  paragraphs,
  last = false,
}: {
  step: string;
  title: string;
  paragraphs: string[];
  last?: boolean;
}) {
  return (
    <article className={last ? "pb-0" : "border-b border-[var(--line)] pb-12 mb-12"}>
      <p
        className={`${fraunces.className} text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-[var(--accent)]`}
      >
        {step}
      </p>
      <h3 className={`${fraunces.className} mt-6 font-semibold`}>{title}</h3>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
          {paragraph}
        </p>
      ))}
    </article>
  );
}
