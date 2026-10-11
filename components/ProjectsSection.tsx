import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projectColumnOrder, projects } from "@/lib/content";
import { InlineLink } from "@/components/InlineLink";

export default function ProjectsSection() {
  return (
    <SectionShell id="projekty" label="Projekty">
      <Reveal>
        <h2 className={fraunces.className}>Strony, które wspierają firmy moich klientów</h2>
      </Reveal>
      <div className="project-masonry">
        {projectColumnOrder.map((slug, index) => {
          const project = projects.find((item) => item.slug === slug);
          return project ? (
            <Reveal key={project.slug} index={index}>
              <ProjectCard project={project} variant="short" />
            </Reveal>
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
