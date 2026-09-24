import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import CennikPlanCard from "@/components/CennikPlanCard";
import FaqItem from "@/components/FaqItem";
import Button from "@/components/Button";
import { pricingPlans } from "@/lib/content";
import { cennik } from "@/lib/pages/cennik";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, faqPage, serviceOffers } from "@/lib/schema";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Cennik stron internetowych i aplikacji — jawne stawki",
  description:
    "Trzy pakiety od 3 500 zł netto plus opieka od 199 zł miesięcznie. Bez wyceny na telefon i bez ukrytych kosztów.",
  path: "/cennik",
});

const linkClass =
  "text-[var(--text)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]";

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/cennik", "Cennik")} />
      <JsonLd data={serviceOffers()} />
      <JsonLd data={faqPage(cennik.faqs)} />

      <SectionShell label="Cennik">
        <h1 className={fraunces.className}>
          Cennik <em>bez wyceny na telefon</em>
        </h1>
        <p className="lead mt-6 max-w-[40rem]">{cennik.lead}</p>
      </SectionShell>

      <SectionShell label="Jasne stawki">
        <h2 className={fraunces.className}>{cennik.whyHeading}</h2>
        {cennik.why.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Pakiety">
        <h2 className={fraunces.className}>{cennik.sitesHeading}</h2>
        <p className="lead mt-6 max-w-[40rem]">{cennik.sitesIntro}</p>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <CennikPlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Systemy">
        <h2 className={fraunces.className}>{cennik.appsHeading}</h2>
        {cennik.apps.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
        <p className="body-copy mt-6 max-w-[40rem]">
          <Link href="/aplikacje-webowe" className={linkClass}>
            Jak buduję aplikacje webowe
          </Link>
        </p>
      </SectionShell>

      <SectionShell label="Abonament">
        <h2 className={fraunces.className}>{cennik.careHeading}</h2>
        {cennik.care.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
        <p className="body-copy mt-6 max-w-[40rem]">
          <Link href="/opieka-techniczna" className={linkClass}>
            Co obejmuje opieka techniczna
          </Link>
        </p>
      </SectionShell>

      <SectionShell label="Widełki">
        <h2 className={fraunces.className}>{cennik.factorsHeading}</h2>
        <p className="lead mt-6 max-w-[40rem]">{cennik.factorsIntro}</p>
        <ul className="mt-6 max-w-[40rem] space-y-6">
          {cennik.factors.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Pytania">
        <h2 className={fraunces.className}>{cennik.faqHeading}</h2>
        <div className="mt-6">
          {cennik.faqs.map((faq) => (
            <FaqItem key={faq.question}>
              <h3 className={`${fraunces.className} font-semibold`}>{faq.question}</h3>
              <p className="body-copy max-w-[40rem]">{faq.answer}</p>
            </FaqItem>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Dalej">
        <p className="lead max-w-[40rem]">{cennik.close}</p>
        <div className="mt-6">
          <Button href="/kontakt" variant="primary">
            Napisz do mnie
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
