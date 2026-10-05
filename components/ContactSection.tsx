import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { contact, CALENDAR_URL } from "@/lib/content";

export default function ContactSection() {
  return (
    <SectionShell id="kontakt" label="Kontakt">
      <h2 className={fraunces.className}>
        {contact.heading} <em>{contact.headingAccent}</em>
      </h2>
      <div className="mx-auto max-w-[70ch]">
        <p className="lead">{contact.support}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            {contact.cta}
          </Button>
          <Button href="/kontakt#formularz" variant="secondary">
            {contact.secondaryCta}
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
