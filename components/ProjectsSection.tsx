import SectionShell from "@/components/SectionShell";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function ProjectsSection() {
  return (
    <SectionShell id="projekty" label="Projekty">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
