import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProcessStep from "@/components/ProcessStep";
import Reveal from "@/components/Reveal";
import { process, processSteps } from "@/lib/content";

export default function ProcessSection() {
  return (
    <SectionShell id="wspolpraca" label="Jak pracujemy">
      <Reveal>
        <h2 className={fraunces.className}>
          {process.heading} <em>{process.headingAccent}</em>
        </h2>
      </Reveal>
      <Reveal className="process-track mx-auto flex w-full max-w-[48rem] flex-col">
        <div className="process-line" aria-hidden="true" />
        {processSteps.map((item, index) => (
          <ProcessStep
            key={item.step}
            item={item}
            index={index}
            last={index === processSteps.length - 1}
          />
        ))}
      </Reveal>
    </SectionShell>
  );
}
