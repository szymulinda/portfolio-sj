import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProcessStep from "@/components/ProcessStep";
import { process, processSteps } from "@/lib/content";

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
    </SectionShell>
  );
}
