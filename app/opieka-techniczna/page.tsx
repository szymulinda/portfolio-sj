import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { opiekaTechniczna as copy } from "@/lib/pages/opieka-techniczna";
import { CALENDAR_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { LinkedText } from "@/components/InlineLink";

export const metadata = pageMetadata({
  title: "Opieka techniczna strony internetowej — od 199 zł/mies.",
  description:
    "Hosting, monitoring, aktualizacje i poprawki w jednej opłacie od 199 zł netto miesięcznie. Bez licencji na wtyczki.",
  path: "/opieka-techniczna",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/opieka-techniczna", "Opieka techniczna")} />

      <SectionShell label="Opieka">
        <h1 className={fraunces.className}>
          Opieka techniczna - <em>strona nie zostaje sama</em>
        </h1>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.lead}</p>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>{copy.includesHeading}</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.includesIntro}</p>
        <ul className="mt-6 mx-auto max-w-[70ch] space-y-6">
          {copy.includes.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Granice">
        <h2 className={fraunces.className}>{copy.excludesHeading}</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.excludesIntro}</p>
        <ul className="mt-6 mx-auto max-w-[70ch] space-y-6">
          {copy.excludes.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Licencje">
        <h2 className={fraunces.className}>{copy.licensesHeading}</h2>
        {copy.licenses.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Przejęcie">
        <h2 className={fraunces.className}>{copy.takeoverHeading}</h2>
        {copy.takeover.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph.includes("przekaż stronę pod opiekę") ? (
              <LinkedText
                text={paragraph}
                href="/kontakt#formularz"
                anchor="przekaż stronę pod opiekę"
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
