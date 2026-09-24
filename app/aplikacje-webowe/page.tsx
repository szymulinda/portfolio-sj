import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { aplikacjeWebowe as copy } from "@/lib/pages/aplikacje-webowe";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Aplikacje webowe na zamówienie — systemy dla firm",
  description:
    "Dedykowane aplikacje webowe, panele klienta, systemy rezerwacji i CRM. Architektura Next.js, TypeScript, PostgreSQL.",
  path: "/aplikacje-webowe",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/aplikacje-webowe", "Aplikacje webowe")} />

      <SectionShell label="Usługi">
        <h1 className={fraunces.className}>
          Aplikacje webowe, <em>których nie kupisz z półki</em>
        </h1>
        <p className="lead mt-6 max-w-[40rem]">{copy.lead}</p>
      </SectionShell>

      <SectionShell label="Sygnały">
        <h2 className={fraunces.className}>{copy.whenHeading}</h2>
        <p className="lead mt-6 max-w-[40rem]">{copy.whenIntro}</p>
        <ul className="mt-6 max-w-[40rem] space-y-6">
          {copy.when.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>{copy.whatHeading}</h2>
        <h3 className={`${fraunces.className} mt-12 font-semibold`}>
          {copy.panelsHeading}
        </h3>
        {copy.panels.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
        <h3 className={`${fraunces.className} mt-12 font-semibold`}>{copy.crmHeading}</h3>
        {copy.crm.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
        <h3 className={`${fraunces.className} mt-12 font-semibold`}>{copy.autoHeading}</h3>
        {copy.auto.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Stack">
        <h2 className={fraunces.className}>{copy.archHeading}</h2>
        {copy.arch.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Wycena">
        <h2 className={fraunces.className}>{copy.quoteHeading}</h2>
        {copy.quote.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Dalej">
        <p className="lead max-w-[40rem]">{copy.close}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button href="/kontakt" variant="primary">
            Napisz do mnie
          </Button>
          <Button href="/cennik" variant="secondary">
            Zobacz cennik
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
