import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import { projects } from "@/lib/content";
import { portfolioPage } from "@/lib/pages/portfolio";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Portfolio — projekty własne i wdrożenia",
  description:
    "Callnest, MiXmediX, Vetsy, Nest - projekty, które zaprojektowałem i zbudowałem od zera.",
  path: "/portfolio",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/portfolio", "Portfolio")} />

      <SectionShell label="Projekty">
        <h1 className={fraunces.className}>
          Projekty, <em>które zbudowałem</em>
        </h1>
        <p className="lead mt-6 max-w-[40rem]">{portfolioPage.lead}</p>
      </SectionShell>

      {projects.map((project) => (
        <SectionShell key={project.slug} label={project.title}>
          <h2 className={fraunces.className}>{project.title}</h2>
          <p className="label mt-4 text-[var(--accent)]">{project.status}</p>
          <div className="mt-6 aspect-[16/10] max-w-[40rem] bg-[var(--bg-alt)]" />
          <p className="mt-3 text-[0.8rem] text-[var(--text-subtle)]">
            Zrzut ekranu wkrótce
          </p>
          <h3 className={`${fraunces.className} mt-12 font-semibold`}>Problem</h3>
          {project.problem.map((paragraph) => (
            <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
              {paragraph}
            </p>
          ))}
          <h3 className={`${fraunces.className} mt-12 font-semibold`}>Rozwiązanie</h3>
          {project.solution.map((paragraph) => (
            <p key={paragraph} className="body-copy mt-6 max-w-[40rem]">
              {paragraph}
            </p>
          ))}
          <p className="body-copy mt-12 max-w-[40rem]">
            <span className="font-medium text-[var(--text)]">Stack: </span>
            {project.stack}
          </p>
        </SectionShell>
      ))}

      <SectionShell label="Dalej">
        <p className="lead max-w-[40rem]">{portfolioPage.close}</p>
        <div className="mt-6">
          <Button href="/kontakt" variant="primary">
            Napisz do mnie
          </Button>
        </div>
      </SectionShell>
    </main>
  );
}
