import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { opiekaTechniczna as copy } from "@/lib/pages/opieka-techniczna";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";

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
        <p className="lead mt-6 max-w-[40rem]">{copy.lead}</p>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>{copy.includesHeading}</h2>
        <p className="lead mt-6 max-w-[40rem]">{copy.includesIntro}</p>
        <ul className="mt-6 max-w-[40rem] space-y-6">
          {copy.includes.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Granice">
        <h2 className={fraunces.className}>{copy.excludesHeading}</h2>
        <p className="lead mt-6 max-w-[40rem]">{copy.excludesIntro}</p>
        <ul className="mt-6 max-w-[40rem] space-y-6">
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
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Przejęcie">
        <h2 className={fraunces.className}>{copy.takeoverHeading}</h2>
        {copy.takeover.map((paragraph) => (
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
