import { fraunces } from "@/lib/fonts";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-[var(--surface)] p-7">
      <div className="aspect-[16/10] bg-[var(--bg-alt)]" />
      <h3 className={`${fraunces.className} mt-6 font-semibold`}>{project.title}</h3>
      <p className="body-copy mt-3">{project.oneLiner}</p>
      <p className="label mt-3">{project.tags.join(" · ")}</p>
    </article>
  );
}
