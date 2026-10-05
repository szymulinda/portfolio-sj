import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ServiceRow from "@/components/ServiceRow";
import { services } from "@/lib/content";

export default function ServicesSection() {
  return (
    <SectionShell id="uslugi" label="Usługi">
      <h2 className={fraunces.className}>Co buduję dla firm</h2>
      <div className="mx-auto flex w-full max-w-[48rem] flex-col">
        {services.map((service, index) => (
          <ServiceRow
            key={service.title}
            service={service}
            last={index === services.length - 1}
          />
        ))}
      </div>
    </SectionShell>
  );
}
