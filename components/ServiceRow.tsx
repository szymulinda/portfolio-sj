import { fraunces } from "@/lib/fonts";
import type { Service } from "@/lib/content";
import { LinkedText } from "@/components/InlineLink";

export default function ServiceRow({
  service,
  last = false,
}: {
  service: Service;
  last?: boolean;
}) {
  return (
    <article className={last ? "pb-0" : "border-b border-[var(--line)] pb-12"}>
      <h3 className={`${fraunces.className} font-semibold`}>{service.title}</h3>
      <p className="body-copy mt-6">
        {service.href && service.anchor ? (
          <LinkedText text={service.description} href={service.href} anchor={service.anchor} />
        ) : (
          service.description
        )}
      </p>
      <p className="label mt-3">{service.tags.join(" · ")}</p>
    </article>
  );
}
