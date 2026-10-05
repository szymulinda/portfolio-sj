import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProcessStepExpandable from "@/components/ProcessStepExpandable";
import ComparisonTable from "@/components/ComparisonTable";
import FaqItem from "@/components/FaqItem";
import { tworzenieStron } from "@/lib/pages/tworzenie-stron";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { LinkedText } from "@/components/InlineLink";
import Button from "@/components/Button";
import { CALENDAR_URL } from "@/lib/content";
import {
  breadcrumbList,
  faqPage,
  professionalService,
  SITE_URL,
} from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Tworzenie stron www Opole — dedykowany kod, nie szablon",
  description:
    "Jak powstaje strona internetowa w Opolu: proces, technologia, terminy i koszty. Płacisz dopiero po akceptacji projektu graficznego.",
  path: "/tworzenie-stron-www-opole",
});

export default function Page() {
  const copy = tworzenieStron;

  return (
    <main>
      <JsonLd data={professionalService(`${SITE_URL}/tworzenie-stron-www-opole`)} />
      <JsonLd data={faqPage()} />
      <JsonLd
        data={breadcrumbList("/tworzenie-stron-www-opole", "Tworzenie stron www Opole")}
      />
      <SectionShell label="Usługi">
        <h1 className={fraunces.className}>
          Tworzenie stron www w Opolu - <em>jak to robię</em>
        </h1>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.lead}</p>
      </SectionShell>

      <SectionShell label="Zakres">
        <h2 className={fraunces.className}>Co dostajesz zamiast szablonu</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.insteadIntro}</p>
        <div className="mt-12 flex flex-col">
          {copy.instead.map((item, index) => (
            <article
              key={item.title}
              className={
                index === copy.instead.length - 1
                  ? "pb-0"
                  : "border-b border-[var(--line)] pb-12 mb-12"
              }
            >
              <h3 className={`${fraunces.className} font-semibold`}>{item.title}</h3>
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy mt-6 mx-auto max-w-[70ch]">
                  {paragraph.includes("projekty zbudowane w tej technologii") ? (
                    <LinkedText
                      text={paragraph}
                      href="/portfolio"
                      anchor="projekty zbudowane w tej technologii"
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Współpraca">
        <h2 className={fraunces.className}>Jak przebiega współpraca</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.collaborationIntro}</p>
        <div className="mt-12 flex flex-col">
          {copy.collaboration.map((item, index) => (
            <ProcessStepExpandable
              key={item.step}
              step={item.step}
              title={item.title}
              paragraphs={item.paragraphs}
              last={index === copy.collaboration.length - 1}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Terminy">
        <h2 className={fraunces.className}>Ile to trwa i od czego zależy</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">
          <LinkedText
            text={copy.timingIntro}
            href="/cennik"
            anchor="ile kosztuje strona"
          />
        </p>
        <ul className="mt-6 mx-auto max-w-[70ch] space-y-6">
          {copy.timing.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Porównanie">
        <h2 className={fraunces.className}>WordPress a kod dedykowany</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.compareIntro}</p>
        <ComparisonTable />
      </SectionShell>

      <SectionShell label="Granice">
        <h2 className={fraunces.className}>Dla kogo to nie jest</h2>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{copy.notForIntro}</p>
        <ul className="mt-6 mx-auto max-w-[70ch] space-y-6">
          {copy.notFor.map((item) => (
            <li key={item} className="body-copy">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Pytania">
        <h2 className={fraunces.className}>Najczęstsze pytania</h2>
        <div className="mt-6">
          {copy.faqs.map((faq) => (
            <FaqItem key={faq.question}>
              <h3 className={`${fraunces.className} font-semibold`}>{faq.question}</h3>
              <p className="body-copy mx-auto max-w-[70ch]">{faq.answer}</p>
            </FaqItem>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Dalej">
        <p className="lead mx-auto max-w-[70ch]">
          <LinkedText text={copy.close} href="/kontakt#formularz" anchor="opisz swój projekt" />
        </p>
        <div className="mt-6">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            Umów 15-minutową rozmowę
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
