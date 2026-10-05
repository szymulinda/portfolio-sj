import Image from "next/image";
import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import { InlineLink } from "@/components/InlineLink";
import Button from "@/components/Button";
import { CALENDAR_URL, homeAbout } from "@/lib/content";

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
        <div className="problem-prose about-prose">
          {homeAbout.paragraphs.map((paragraph, index) => {
            const turn =
              index === 1 ? paragraph.match(/^[^.]+[.]/)?.[0] : undefined;

            if (turn) {
              return (
                <div key={paragraph}>
                  <p className="problem-turn">{turn}</p>
                  <p className="problem-copy">{paragraph.slice(turn.length).trim()}</p>
                </div>
              );
            }

            return (
              <p key={paragraph} className="problem-copy">
                {paragraph}
              </p>
            );
          })}
          <div className="about-cta">
            <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
              Umów 15-minutową rozmowę
            </Button>
            <p className="about-more">
              <InlineLink href="/o-mnie">więcej o mnie</InlineLink>
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
