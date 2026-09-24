import SectionShell from "@/components/SectionShell";
import ServiceRow from "@/components/ServiceRow";
import { services } from "@/lib/content";

export default function ServicesSection() {
  return (
    <SectionShell id="uslugi" label="Usługi">
      <div className="flex flex-col">
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
