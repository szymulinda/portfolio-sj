import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { oMnie } from "@/lib/pages/o-mnie";
import { CALENDAR_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, person } from "@/lib/schema";
import { LinkedText } from "@/components/InlineLink";

export const metadata = pageMetadata({
  title: "O mnie — Szymon Jurkun, inżynier oprogramowania",
  description:
    "Inżynier oprogramowania, student informatyki AGH, założyciel Callnest. Wdrażam strony dla klientów i buduję własne produkty.",
  path: "/o-mnie",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/o-mnie", "O mnie")} />
      <JsonLd data={person()} />

      <SectionShell label="O mnie">
        <h1 id="person" className={fraunces.className}>
          Inżynier, <em>nie agencja</em>
        </h1>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{oMnie.lead}</p>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>{oMnie.workHeading}</h2>
        {oMnie.work.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph.includes("co zbudowałem") ? (
              <LinkedText text={paragraph} href="/portfolio" anchor="co zbudowałem" />
            ) : (
              paragraph
            )}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Technologia">
        <h2 className={fraunces.className}>{oMnie.wordpressHeading}</h2>
        {oMnie.wordpress.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Współpraca">
        <h2 className={fraunces.className}>{oMnie.howHeading}</h2>
        {oMnie.how.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
            {paragraph}
          </p>
        ))}
        <p className="mt-12 mx-auto max-w-[70ch] text-[0.875rem] leading-relaxed text-[var(--text-muted)]">
          {oMnie.certificates}
        </p>
        <div className="mt-12">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            Umów 15-minutową rozmowę
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
