import { fraunces } from "@/lib/fonts";
import Button from "@/components/Button";
import type { PricingPlan } from "@/lib/content";
import { pricing, CALENDAR_URL } from "@/lib/content";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="mt-[3px] size-4 shrink-0 text-[var(--accent)]"
    >
      <path
        d="M3.2 8.4 6.3 11.6 12.8 4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OfferPlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="box-border min-w-0 rounded-[16px] border-8 border-[#f0edea] bg-[#fbf8f6] p-7">
      {plan.featured ? (
        <p className="mb-3 inline-flex rounded-full bg-[var(--accent)] px-2.5 py-1 text-[11px] font-medium leading-none text-[var(--bg)]">
          {pricing.featuredLabel}
        </p>
      ) : null}
      <h3 className={`${fraunces.className} text-[28px] font-semibold leading-[1.15] text-[var(--text)]`}>
        {plan.name}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.5] text-[var(--text-muted)]">{plan.when}</p>
      <p className={`${fraunces.className} mt-5 text-[32px] font-semibold leading-none text-[var(--text)]`}>
        {plan.price}
      </p>
      <p className="mt-1 text-[14px] text-[var(--text-muted)]">netto</p>
      <Button
        href={CALENDAR_URL}
        variant="primary"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 w-full"
      >
        {plan.cta}
      </Button>
      <div aria-hidden="true" className="my-5 h-px bg-[rgba(26,26,23,0.12)]" />
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-subtle)]">
        Dla kogo?
      </p>
      <p className="mt-2 text-[15px] leading-[1.5] text-[var(--text)]">{plan.audience}</p>
      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-subtle)]">
        Co zawiera pakiet:
      </p>
      {plan.includesLead ? (
        <p className="mt-2 text-[15px] leading-[1.5] text-[var(--text)]">{plan.includesLead}</p>
      ) : null}
      <ul className={`flex flex-col gap-2.5 ${plan.includesLead ? "mt-2.5" : "mt-2"}`}>
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2 text-[15px] leading-[1.5] text-[var(--text)]">
            <CheckIcon />
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
