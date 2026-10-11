import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projectColumnOrder, projects, CALENDAR_URL } from "@/lib/content";
import { portfolioPage } from "@/lib/pages/portfolio";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { breadcrumbList, portfolioProjects } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Portfolio - projekty własne i wdrożenia",
  description:
    "Callnest, Glamour Kosmetik, ATB Bud, MiXmediX - dwa wdrożenia dla klientów i dwa produkty własne.",
  path: "/portfolio",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbList("/portfolio", "Portfolio")} />
      <JsonLd data={portfolioProjects()} />

      <SectionShell label="Projekty">
        <h1 className={fraunces.className}>
          Projekty, <em>które zbudowałem</em>
        </h1>
        <p className="mx-auto max-w-[60ch] text-center text-[17px] leading-[1.6] text-[var(--text-muted)]">
          {portfolioPage.lead}
        </p>
        <div className="project-masonry mt-14">
          {projectColumnOrder.map((slug, index) => {
            const project = projects.find((item) => item.slug === slug);
            return project ? (
              <Reveal key={project.slug} index={index}>
                <ProjectCard
                  project={project}
                  variant="full"
                  priorityFirst={index === 0}
                  headingAs="h2"
                />
              </Reveal>
            ) : null;
          })}
        </div>
        <div className="mx-auto mt-12 flex flex-col items-center text-center">
          <Button href={CALENDAR_URL} variant="primary" target="_blank" rel="noopener noreferrer">
            Umów 15-minutową rozmowę
          </Button>
          <p className="mt-3 text-[14px] leading-[1.5] text-[var(--text-muted)]">
            Chcesz podobny projekt? Piętnaście minut wystarczy, żeby ustalić zakres.
          </p>
        </div>
      </SectionShell>
    </main>
  );
}
