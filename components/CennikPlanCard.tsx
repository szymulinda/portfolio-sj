import { fraunces } from "@/lib/fonts";
import type { PricingPlan } from "@/lib/content";
import { pricing } from "@/lib/content";

export default function CennikPlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={`bg-[var(--surface)] p-7 ${
        plan.featured ? "ring-1 ring-[var(--accent)]" : "ring-1 ring-[var(--line)]"
      }`}
    >
      {plan.featured ? (
        <p className="label mb-3 text-[var(--accent)]">{pricing.featuredLabel}</p>
      ) : null}
      <h3 className={`${fraunces.className} font-semibold`}>{plan.name}</h3>
      <p
        className={`${fraunces.className} mt-6 text-[clamp(1.3rem,2vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.015em]`}
      >
        {plan.price} netto
      </p>
      <p className="body-copy mt-6">{plan.when}</p>
      <p className="body-copy mt-6">{plan.audience}</p>
      {plan.includesLead ? (
        <div className="mt-6">
          <p className="text-[0.95rem] font-medium text-[var(--text)]">{plan.includesLead}</p>
          {plan.includesNote ? <p className="body-copy mt-2">{plan.includesNote}</p> : null}
        </div>
      ) : null}
      <ul className="mt-6 space-y-6">
        {plan.features.map((feature) => (
          <li key={feature.label}>
            <p className="text-[0.95rem] font-medium text-[var(--text)]">{feature.label}</p>
            <p className="body-copy mt-2">{feature.note}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
