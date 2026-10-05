import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { contact, site, CALENDAR_URL } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";
import { InlineLink } from "@/components/InlineLink";

export const metadata = pageMetadata({
  title: "Kontakt — wycena i konsultacja | Szymon Jurkun",
  description:
    "Umów 15-minutową rozmowę albo napisz, co chcesz zbudować. Odpowiadam tego samego dnia roboczego.",
  path: "/kontakt",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/kontakt", "Kontakt")} />
      <SectionShell label="Kontakt">
        <h1 className={fraunces.className}>
          {contact.heading} <em>{contact.headingAccent}</em>
        </h1>
        <div className="mx-auto max-w-[70ch]">
          <section id="rozmowa" className="scroll-mt-24">
            <h2 className={`${fraunces.className} text-[clamp(1.6rem,2.5vw,2rem)] font-semibold leading-[1.2]`}>
              Umów 15-minutową rozmowę
            </h2>
            <p className="body-copy mt-4">
              Krótka rozmowa o tym, co firma robi, skąd dziś przychodzą klienci i czego potrzebuje
              strona. Bez prezentacji i bez zobowiązań.
            </p>
            <div className="mt-6">
              <Button
                href={CALENDAR_URL}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wybierz termin
              </Button>
              <p className="mt-3 text-[14px] leading-[1.5] text-[var(--text-muted)]">
                Otworzy się kalendarz w nowej karcie.
              </p>
            </div>
          </section>
          <div aria-hidden="true" className="my-[72px] h-px bg-[rgba(26,26,23,0.12)]" />
          <section id="formularz" className="scroll-mt-24">
            <h2 className={`${fraunces.className} text-[clamp(1.6rem,2.5vw,2rem)] font-semibold leading-[1.2]`}>
              Albo po prostu napisz
            </h2>
            <p className="body-copy mt-4">
              Jeśli wolisz wiadomość - opisz, czego potrzebujesz. Odpowiadam tego samego dnia
              roboczego.
            </p>
            <ContactForm />
          </section>
          <div className="body-copy mt-12 space-y-2">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--text)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]"
              >
                {site.email}
              </a>
            </p>
            <p>
              <InlineLink href="/o-mnie">Szymon Jurkun</InlineLink>
            </p>
            <p>Opole i województwo opolskie, praca zdalna z całej Polski</p>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
