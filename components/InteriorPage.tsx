import type { ReactNode } from "react";
import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, type JsonLd as JsonLdData } from "@/lib/schema";

export default function InteriorPage({
  label,
  title,
  stub,
  path,
  extraJsonLd = [],
}: {
  label: string;
  title: string;
  stub: ReactNode;
  path: string;
  extraJsonLd?: JsonLdData[];
}) {
  return (
    <main>
      <JsonLd data={breadcrumbList(path, title)} />
      {extraJsonLd.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
      <SectionShell label={label}>
        <h1 className={fraunces.className}>{title}</h1>
        <p className="lead mt-6 mx-auto max-w-[70ch]">{stub}</p>
      </SectionShell>
    </main>
  );
}
