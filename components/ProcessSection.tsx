import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProcessStep from "@/components/ProcessStep";
import Button from "@/components/Button";
import { process, processSteps, CALENDAR_URL } from "@/lib/content";

export default function ProcessSection() {
  return (
    <SectionShell id="wspolpraca" label="Jak pracujemy">
      <h2 className={fraunces.className}>
        {process.heading} <em>{process.headingAccent}</em>
      </h2>
      <div className="mx-auto flex w-full max-w-[48rem] flex-col">
        {processSteps.map((item, index) => (
          <ProcessStep
            key={item.step}
            item={item}
            last={index === processSteps.length - 1}
          />
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-[48rem] flex-col items-center text-center">
        <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
          Umów 15-minutową rozmowę
        </Button>
        <p className="mt-3 max-w-[36ch] text-[14px] leading-[1.5] text-[var(--text-muted)]">
          Bez zobowiązań. Piętnaście minut o tym, czego potrzebuje Twoja firma.
        </p>
      </div>
    </SectionShell>
  );
}
