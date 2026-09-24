import Link from "next/link";
import { fraunces } from "@/lib/fonts";
import { projects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export default function HomeProjects() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-28 lg:px-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className={`${fraunces.className} text-[1.7rem] font-medium text-[var(--text)]`}>
          Projekty
        </h2>
        <Link
          href="/portfolio"
          className="text-[0.95rem] text-[var(--text-muted)] underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--accent)]"
        >
          Wszystkie
        </Link>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
