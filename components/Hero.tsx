import { fraunces } from "@/lib/fonts";
import Button from "@/components/Button";
import { hero } from "@/lib/content";

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
        <p className="lead mt-6 max-w-[40rem]">{hero.support}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button href="/cennik" variant="primary">
            {hero.primaryCta}
          </Button>
          <Button href="/kontakt" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
