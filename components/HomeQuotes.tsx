import { fraunces } from "@/lib/fonts";
import { quotes } from "@/lib/site";

export default function HomeQuotes() {
  return (
    <section className="px-6 py-24 md:px-8 lg:px-16">
      <h2 className={`${fraunces.className} text-xl font-normal text-[var(--text)]`}>
        Współpraca
      </h2>
      <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
        {quotes.map((quote) => (
          <blockquote key={quote.name}>
            <p className="text-[4rem] leading-none text-[var(--text-muted)]">“</p>
            <p className="-mt-4 text-[1.15rem] leading-relaxed text-[var(--text)]">
              {quote.text}
            </p>
            <footer className="mt-8 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-[var(--bg-alt)]" />
              <p className="text-sm text-[var(--text)]">
                {quote.name}
                <span className="text-[var(--text-muted)]"> · {quote.role}</span>
              </p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
