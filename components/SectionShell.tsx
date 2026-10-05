import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  label: string;
  children: ReactNode;
};

export default function SectionShell({ id, label, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-24 py-[72px] md:py-[120px]">
      <div className="page-wrap section-block">
        <p className="section-kicker">{label}</p>
        {children}
      </div>
    </section>
  );
}
