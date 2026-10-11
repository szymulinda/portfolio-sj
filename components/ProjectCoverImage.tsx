import Image from "next/image";
import type { ProjectImage } from "@/lib/content";

export default function ProjectCoverImage({
  images,
  priorityFirst = false,
  onOpen,
}: {
  images: ProjectImage[];
  priorityFirst?: boolean;
  onOpen?: (index: number) => void;
}) {
  return (
    <ul className="project-gallery">
      {images.map((image, index) => (
        <li key={image.src} className="project-gallery-item">
          <button
            type="button"
            className="project-gallery-trigger"
            onClick={() => onOpen?.(index)}
            aria-label={`Powiększ: ${image.alt}`}
          >
            <span className="project-frame relative block aspect-[4/3] overflow-hidden rounded-[8px] bg-[#f2ede2]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes={
                  images.length === 1
                    ? "(min-width: 768px) 538px, calc(100vw - 88px)"
                    : "(min-width: 768px) 260px, 80vw"
                }
                {...(priorityFirst && index === 0
                  ? { priority: true }
                  : { loading: "lazy" as const })}
              />
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
