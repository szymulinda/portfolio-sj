import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProjectCard from "@/components/ProjectCard";
import { projectColumnOrder, projects } from "@/lib/content";
import { InlineLink } from "@/components/InlineLink";

export default function ProjectsSection() {
  return (
    <SectionShell id="projekty" label="Projekty">
      <h2 className={fraunces.className}>Strony, które wspierają firmy moich klientów</h2>
      <div className="project-masonry">
        {projectColumnOrder.map((slug) => {
          const project = projects.find((item) => item.slug === slug);
          return project ? (
            <ProjectCard key={project.slug} project={project} variant="short" />
          ) : null;
        })}
      </div>
      <p className="section-note mx-auto mt-12 max-w-[70ch]">
        Status i liczby przy każdym wdrożeniu:{" "}
        <InlineLink href="/portfolio">zobacz wszystkie projekty</InlineLink>.
      </p>
    </SectionShell>
  );
}
