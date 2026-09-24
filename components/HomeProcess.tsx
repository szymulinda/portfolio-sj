import { fraunces } from "@/lib/fonts";
import { processSteps } from "@/lib/site";

export default function HomeProcess() {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-16">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <h2
          className={`${fraunces.className} text-xl font-normal text-[var(--text)] lg:col-span-2 lg:pt-8`}
        >
          Proces
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-10">
          {processSteps.map((step) => (
            <figure key={step.title}>
              <div
                className={`aspect-square rounded-[12px] bg-gradient-to-br ${step.tone}`}
              />
              <figcaption className="mt-5">
                <p className="font-semibold text-[var(--text)]">{step.title}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
