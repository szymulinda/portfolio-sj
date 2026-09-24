import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { oMnie } from "@/lib/pages/o-mnie";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, person } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "O mnie — Szymon Jurkun, inżynier oprogramowania",
  description:
    "Inżynier oprogramowania, student informatyki AGH, założyciel Callnest. Buduję produkty, nie wizytówki.",
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
        <p className="lead mt-6 max-w-[40rem]">{oMnie.lead}</p>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>{oMnie.workHeading}</h2>
        {oMnie.work.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Technologia">
        <h2 className={fraunces.className}>{oMnie.wordpressHeading}</h2>
        {oMnie.wordpress.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
      </SectionShell>

      <SectionShell label="Współpraca">
        <h2 className={fraunces.className}>{oMnie.howHeading}</h2>
        {oMnie.how.map((paragraph) => (
          <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
            {paragraph}
          </p>
        ))}
        <p className="mt-12 max-w-[40rem] text-[0.8rem] leading-relaxed text-[var(--text-subtle)]">
          {oMnie.certificates}
        </p>
        <div className="mt-12">
          <Button href="/kontakt" variant="primary">
            Napisz do mnie
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
