import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { contact } from "@/lib/content";

export default function ContactSection() {
  return (
    <SectionShell id="kontakt" label="Kontakt">
      <h2 className={fraunces.className}>
        {contact.heading} <em>{contact.headingAccent}</em>
      </h2>
      <p className="lead mt-6 max-w-[40rem]">{contact.support}</p>
      <div className="mt-6">
        <Button href="/kontakt" variant="primary">
          {contact.cta}
        </Button>
      </div>
    </SectionShell>
  );
}
