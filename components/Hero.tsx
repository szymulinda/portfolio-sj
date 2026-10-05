import { fraunces } from "@/lib/fonts";
import Button from "@/components/Button";
import { hero, CALENDAR_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section className="py-[72px] md:py-[120px]">
      <div className="page-wrap">
        <h1 className={`${fraunces.className} max-w-[16ch] sm:max-w-[20ch]`}>
          {hero.line1}
          <br />
          <em>{hero.accent}</em>
          {hero.line2rest}
        </h1>
        <p className="lead mt-6 max-w-[70ch]">{hero.support}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            {hero.primaryCta}
          </Button>
          <Button href="#cennik" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
