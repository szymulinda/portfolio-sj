"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { ProjectImage } from "@/lib/content";

export default function ProjectLightbox({
  images,
  openIndex,
  onClose,
  onChange,
}: {
  images: ProjectImage[];
  openIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const labelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const current = images[openIndex];

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        onChange((openIndex + 1) % images.length);
        return;
      }
      if (event.key === "ArrowLeft") {
        onChange((openIndex - 1 + images.length) % images.length);
        return;
      }
      if (event.key === "Tab" && closeRef.current) {
        event.preventDefault();
        closeRef.current.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [images.length, onChange, onClose, openIndex]);

  if (!current) return null;

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
      onClick={onClose}
    >
      <div className="project-lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <p id={labelId} className="sr-only">
          {current.alt}
        </p>
        <button ref={closeRef} type="button" className="project-lightbox-close" onClick={onClose}>
          Zamknij
        </button>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[960px] overflow-hidden rounded-[12px] bg-[#f2ede2]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(min-width: 960px) 960px, 100vw"
            priority
          />
        </div>
        {images.length > 1 ? (
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              className="project-lightbox-nav"
              onClick={() => onChange((openIndex - 1 + images.length) % images.length)}
            >
              Poprzednie
            </button>
            <p className="text-[14px] text-[var(--text-muted)]">
              {openIndex + 1} / {images.length}
            </p>
            <button
              type="button"
              className="project-lightbox-nav"
              onClick={() => onChange((openIndex + 1) % images.length)}
            >
              Następne
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
