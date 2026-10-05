import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { aplikacjeWebowe as copy } from "@/lib/pages/aplikacje-webowe";
import { CALENDAR_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { LinkedText } from "@/components/InlineLink";

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
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.lead}</p>
      </SectionShell>

      <SectionShell label="Sygnały">
        <h2 className={fraunces.className}>{copy.whenHeading}</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.whenIntro}</p>
        <ul className="mt-6 mx-auto max-w-[70ch] space-y-6">
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
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph.includes("zobacz Callnest w portfolio") ? (
              <LinkedText
                text={paragraph}
                href="/portfolio"
                anchor="zobacz Callnest w portfolio"
              />
            ) : (
              paragraph
            )}
          </p>
        ))}
        <h3 className={`${fraunces.className} mt-12 font-semibold`}>{copy.crmHeading}</h3>
        {copy.crm.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
        <h3 className={`${fraunces.className} mt-12 font-semibold`}>{copy.autoHeading}</h3>
        {copy.auto.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Stack">
        <h2 className={fraunces.className}>{copy.archHeading}</h2>
        {copy.arch.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Wycena">
        <h2 className={fraunces.className}>{copy.quoteHeading}</h2>
        {copy.quote.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph.includes("opieka po wdrożeniu") ? (
              <LinkedText
                text={paragraph}
                href="/opieka-techniczna"
                anchor="opieka po wdrożeniu"
              />
            ) : (
              paragraph
            )}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Dalej">
        <p className="lead mx-auto max-w-[70ch]">{copy.close}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            Umów 15-minutową rozmowę
          </Button>
          <Button href="/cennik" variant="secondary">
            Zobacz cennik
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
