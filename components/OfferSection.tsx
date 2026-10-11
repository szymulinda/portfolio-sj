import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import OfferPlanCard from "@/components/OfferPlanCard";
import Reveal from "@/components/Reveal";
import { InlineLink } from "@/components/InlineLink";
import { pricing, pricingPlans } from "@/lib/content";

export default function OfferSection() {
  return (
    <SectionShell id="cennik" label={pricing.label}>
      <Reveal>
        <h2 className={fraunces.className}>{pricing.heading}</h2>
      </Reveal>
      <div className="grid grid-cols-1 items-start gap-6 min-[1100px]:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} index={index}>
            <OfferPlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
      <div className="section-note mx-auto mt-12 flex max-w-[70ch] flex-col items-center gap-[10px] text-center">
        <p>
          Po wdrożeniu: <InlineLink href="/opieka-techniczna">opieka techniczna</InlineLink> od 199 zł
          miesięcznie.
        </p>
        <p>
          Buduję też <InlineLink href="/aplikacje-webowe">aplikacje webowe</InlineLink> i wdrażam
          automatyzacje.
        </p>
        <p>
          Szczegóły stawek: <InlineLink href="/cennik">pełny cennik</InlineLink>.
        </p>
      </div>
    </SectionShell>
  );
}
