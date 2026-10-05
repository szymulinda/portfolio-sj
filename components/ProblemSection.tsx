import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import { problem } from "@/lib/content";

export default function ProblemSection() {
  return (
    <SectionShell id="dlaczego" label={problem.label}>
      <h2 className={fraunces.className}>
        {problem.heading} <em>{problem.headingAccent}</em>
      </h2>
      <div className="mx-auto max-w-[70ch] space-y-6">
        {problem.paragraphs.map((paragraph) => (
          <p key={paragraph} className="lead">
            {paragraph}
          </p>
        ))}
        <p className="text-[0.95rem] leading-relaxed text-[var(--accent)]">
          {problem.guarantee}
        </p>
      </div>
    </SectionShell>
  );
}
