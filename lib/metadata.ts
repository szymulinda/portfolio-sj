import type { Metadata } from "next";

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Strony internetowe Opole — szymonjurkun.pl",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pl_PL",
      url: path,
      images: [ogImage],
    },
  };
}
