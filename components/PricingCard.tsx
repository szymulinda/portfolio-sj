import { fraunces } from "@/lib/fonts";
import type { PricingPlan } from "@/lib/content";
import { pricing } from "@/lib/content";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
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
        {plan.price}
      </p>
      <p className="body-copy mt-6">{plan.audience}</p>
      <ul className="body-copy mt-6 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
