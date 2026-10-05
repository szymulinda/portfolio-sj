import Image from "next/image";
import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import { InlineLink } from "@/components/InlineLink";
import { homeAbout } from "@/lib/content";

export default function AboutSection() {
  return (
    <SectionShell id="o-mnie" label={homeAbout.label}>
      <h2 className={fraunces.className}>{homeAbout.heading}</h2>
      <div className="grid items-start gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12">
        <Image
          src="/szymon-portret.webp"
          alt="Szymon Jurkun, inżynier oprogramowania"
          width={600}
          height={800}
          sizes="(min-width: 768px) 280px, 240px"
          className="mx-auto block h-auto w-full max-w-[240px] rounded-[12px] object-contain md:mx-0 md:max-w-none"
        />
        <div className="max-w-[70ch]">
          {homeAbout.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[15px] leading-[1.6] text-[var(--text)] first:mt-0">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-[15px] leading-[1.6]">
            <InlineLink href="/o-mnie">więcej o mnie</InlineLink>
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
