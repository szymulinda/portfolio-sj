import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { polityka } from "@/lib/pages/polityka";

export const metadata = pageMetadata({
  title: "Polityka prywatności",
  description:
    "Jakie dane zbiera szymonjurkun.pl, w jakim celu i jakie masz prawa. Formularz kontaktowy, bez ciasteczek i analityki.",
  path: "/polityka-prywatnosci",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/polityka-prywatnosci", "Polityka prywatności")} />

      <SectionShell label="Informacje">
        <h1 className={fraunces.className}>Polityka prywatności</h1>
        <p className="lead mt-6 mx-auto max-w-[70ch]">
          Ostatnia aktualizacja: {polityka.updated}
        </p>

        {polityka.sections.map((section) => (
          <section key={section.heading} className="mx-auto mt-16 max-w-[70ch]">
            <h2 className={fraunces.className}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </SectionShell>
    </main>
  );
}
