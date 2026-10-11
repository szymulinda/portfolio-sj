"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { ProjectImage } from "@/lib/content";
import ProjectCoverImage from "@/components/ProjectCoverImage";

const ProjectLightbox = dynamic(() => import("@/components/ProjectLightbox"), {
  ssr: false,
});

export default function ProjectGallery({
  images,
  priorityFirst = false,
}: {
  images: ProjectImage[];
  priorityFirst?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ProjectCoverImage
        images={images}
        priorityFirst={priorityFirst}
        onOpen={setOpenIndex}
      />
      {openIndex !== null ? (
        <ProjectLightbox
          images={images}
          openIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      ) : null}
    </>
  );
}
