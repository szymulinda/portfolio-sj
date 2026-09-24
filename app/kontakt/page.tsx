import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Kontakt — wycena i konsultacja | Szymon Jurkun",
  description:
    "Napisz, co chcesz zbudować. Odpowiadam tego samego dnia roboczego. Bezpłatna wstępna rozmowa o projekcie.",
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
        <p className="lead mt-6 max-w-[40rem]">{contact.support}</p>
        <ContactForm />
        <div className="body-copy mt-12 max-w-[40rem] space-y-2">
          <p>
            <a
              href={`mailto:${site.email}`}
              className="text-[var(--text)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]"
            >
              {site.email}
            </a>
          </p>
          <p>Szymon Jurkun, NIP: [WSTAW PLACEHOLDER - uzupełnię]</p>
          <p>Opole i województwo opolskie, praca zdalna z całej Polski</p>
        </div>
      </SectionShell>
    </main>
  );
}
