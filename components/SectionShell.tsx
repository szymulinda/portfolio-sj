import type { ReactNode } from "react";
import { fraunces } from "@/lib/fonts";

type SectionShellProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export default function SectionShell({ id, label, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-24 py-[72px] md:py-[120px]">
      <div className="page-wrap grid md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-12">
        <p
          className={`${fraunces.className} mb-6 text-[1rem] font-normal leading-snug tracking-[-0.015em] text-[var(--text-subtle)] md:sticky md:top-24 md:mb-0 md:text-[var(--text)]`}
        >
          {label}
        </p>
        <div>{children}</div>
      </div>
    </section>
  );
}
