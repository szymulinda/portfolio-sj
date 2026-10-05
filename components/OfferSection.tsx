import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import OfferPlanCard from "@/components/OfferPlanCard";
import { InlineLink } from "@/components/InlineLink";
import { pricing, pricingPlans } from "@/lib/content";

export default function OfferSection() {
  return (
    <SectionShell id="cennik" label={pricing.label}>
      <h2 className={fraunces.className}>{pricing.heading}</h2>
      <div className="grid grid-cols-1 items-start gap-6 min-[1100px]:grid-cols-3">
        {pricingPlans.map((plan) => (
          <OfferPlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-[70ch] text-center text-[15px] leading-[1.6] text-[var(--text-muted)]">
        Po wdrożeniu: <InlineLink href="/opieka-techniczna">opieka techniczna</InlineLink> od 199 zł
        miesięcznie. Buduję też <InlineLink href="/aplikacje-webowe">aplikacje webowe</InlineLink> i
        wdrażam automatyzacje - odbieranie telefonów, umawianie wizyt, obsługę powtarzalnych pytań.
        Osobno opisuję{" "}
        <InlineLink href="/tworzenie-stron-www-opole">tworzenie stron www w Opolu</InlineLink>.
        Szczegóły stawek: <InlineLink href="/cennik">pełny cennik</InlineLink>.
      </p>
    </SectionShell>
  );
}
