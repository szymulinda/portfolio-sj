import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import PricingCard from "@/components/PricingCard";
import { pricing, pricingPlans } from "@/lib/content";

export default function PricingSection() {
  return (
    <SectionShell id="cennik" label="Cennik">
      <h2 className={fraunces.className}>
        {pricing.heading} <em>{pricing.headingAccent}</em>
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p className="mt-6 max-w-[40rem] text-[0.875rem] leading-relaxed text-[var(--text-muted)]">
        {pricing.sla}
      </p>
    </SectionShell>
  );
}
