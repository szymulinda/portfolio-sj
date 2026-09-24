import Link from "next/link";
import { fraunces } from "@/lib/fonts";
import { site } from "@/lib/site";

export default function HomeCta() {
  return (
    <section className="bg-[#1a1a17] px-6 py-28 text-center md:px-8 md:py-32">
      <p className="text-sm tracking-[0.08em] text-[#f2ede2]/70">Kontakt</p>
      <h2
        className={`${fraunces.className} mx-auto mt-6 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.08] text-[#f2ede2]`}
      >
        Zbudujmy to
        <span className="italic"> razem.</span>
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[#f2ede2]">
        <Link href="/kontakt" className="underline underline-offset-4">
          Kontakt
        </Link>
        <a href={`mailto:${site.email}`} className="underline underline-offset-4">
          {site.email}
        </a>
      </div>
    </section>
  );
}
