import Image from "next/image";
import type { Project } from "@/lib/content";

export default function ProjectCover({
  project,
  sizes,
  className = "",
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-[#f2ede2] ${className}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          className="object-contain"
          sizes={sizes}
        />
      ) : null}
    </div>
  );
}
