import { fraunces } from "@/lib/fonts";
import { services } from "@/lib/site";

export default function HomeServices() {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2
          className={`${fraunces.className} text-xl font-normal text-[var(--text)] lg:col-span-3`}
        >
          Usługi
        </h2>
        <ul className="lg:col-span-8 lg:col-start-5">
          {services.map((service, index) => (
            <li
              key={service.title}
              className={`py-10 ${index < services.length - 1 ? "border-b border-[var(--line)]" : ""}`}
            >
              <h3
                className={`${fraunces.className} text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[1.15] text-[var(--text)]`}
              >
                {service.title}
              </h3>
              <p className="mt-4 text-[1.1rem] leading-relaxed text-[var(--text)]">
                {service.description}
              </p>
              <p className="mt-5 text-[0.95rem] text-[var(--text-muted)]">
                {service.tags.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
