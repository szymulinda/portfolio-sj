import { fraunces } from "@/lib/fonts";
import type { Project } from "@/lib/content";
import ProjectCover from "@/components/ProjectCover";

export default function ProjectCard({
  project,
  variant = "short",
}: {
  project: Project;
  variant?: "short" | "full";
}) {
  const initial = project.title.trim().charAt(0);
  const description = variant === "full" ? project.full : project.summary;
  const results = project.results?.filter((item) => item.trim().length > 0) ?? [];

  return (
    <article className="box-border rounded-[16px] border-8 border-[#f0edea] bg-[#fbf8f6] p-5">
      <ProjectCover
        project={project}
        sizes="(min-width: 768px) 538px, calc(100vw - 88px)"
        className="project-frame rounded-[8px]"
      />
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`${fraunces.className} flex size-6 shrink-0 items-center justify-center rounded-[8px] bg-[var(--text)] text-[12px] font-semibold leading-none text-[var(--bg)]`}
            style={{
              boxShadow:
                "0 0.36px 1.37px -1.58px rgba(5,5,5,0.22), 0 1.37px 5.22px -3.17px rgba(5,5,5,0.19), 0 6px 22.8px -4.75px rgba(5,5,5,0.01)",
            }}
          >
            {initial}
          </span>
          <p className="text-[14px] font-medium leading-snug text-[#1e1a17]">{project.title}</p>
        </div>
        <p className="ml-auto shrink-0 rounded-[8px] border border-[#d8d0ca] bg-[#fbf8f6] px-[10px] py-1 text-[13px] leading-none text-[#141110]">
          {project.category}
        </p>
      </div>
      <h3
        className={`${fraunces.className} mt-3 text-[24px] font-semibold leading-[1.25] text-[var(--text)]`}
      >
        {project.headline}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.6] text-[#1e1a17] opacity-45">{description}</p>
      {results.length > 0 ? (
        <div className="mt-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#1e1a17] opacity-50">
            Rezultaty:
          </p>
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {results.map((result) => (
              <li
                key={result}
                className={`${fraunces.className} rounded-[4px] bg-[#1e1a17] px-[11px] py-1 text-[13px] font-medium leading-[1.3] text-[#f4efeb]`}
              >
                {result}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
