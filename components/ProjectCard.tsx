import Image from "next/image";
import { fraunces } from "@/lib/fonts";
import type { Project } from "@/lib/content";
import ProjectGallery from "@/components/ProjectGallery";

function projectHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectCard({
  project,
  variant = "short",
  priorityFirst = false,
  headingAs = "h3",
}: {
  project: Project;
  variant?: "short" | "full";
  priorityFirst?: boolean;
  headingAs?: "h2" | "h3";
}) {
  const initial = project.title.trim().charAt(0);
  const description = variant === "full" ? project.full : project.summary;
  const results = project.results?.filter((item) => item.trim().length > 0) ?? [];
  const images = project.images;
  const Heading = headingAs;

  return (
    <article className="project-card box-border rounded-[16px] border-8 border-[#f0edea] bg-[#fbf8f6] p-5">
      {images.length > 0 ? (
        <ProjectGallery images={images} priorityFirst={priorityFirst} />
      ) : null}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="flex items-center gap-2">
          {project.icon ? (
            <Image
              src={project.icon}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 rounded-[6px]"
              style={{
                boxShadow:
                  "0 0.36px 1.37px -1.58px rgba(5,5,5,0.22), 0 1.37px 5.22px -3.17px rgba(5,5,5,0.19), 0 6px 22.8px -4.75px rgba(5,5,5,0.01)",
              }}
            />
          ) : (
            <span
              aria-hidden="true"
              className={`${fraunces.className} flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-[var(--text)] text-[10px] font-semibold leading-none text-[var(--bg)]`}
              style={{
                boxShadow:
                  "0 0.36px 1.37px -1.58px rgba(5,5,5,0.22), 0 1.37px 5.22px -3.17px rgba(5,5,5,0.19), 0 6px 22.8px -4.75px rgba(5,5,5,0.01)",
              }}
            >
              {initial}
            </span>
          )}
          <p className="text-[14px] font-medium leading-snug text-[#1e1a17]">{project.title}</p>
        </div>
        <p className="ml-auto shrink-0 rounded-[8px] border border-[#d8d0ca] bg-[#fbf8f6] px-[10px] py-1 text-[13px] leading-none text-[#141110]">
          {project.category}
        </p>
      </div>
      <Heading
        className={`${fraunces.className} mt-3 text-[24px] font-semibold leading-[1.25] text-[var(--text)]`}
      >
        {project.headline}
      </Heading>
      <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-subtle)]">{description}</p>
      {results.length > 0 ? (
        <div className="mt-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-subtle)]">
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
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener"
          className="project-site-link mt-5 inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-[3px] transition-colors duration-[var(--dur-fast)] hover:text-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)]"
        >
          <span>Zobacz stronę</span>
          <span className="font-normal text-[var(--text-muted)] no-underline">
            {projectHostname(project.url)}
          </span>
          <span className="link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      ) : null}
    </article>
  );
}
