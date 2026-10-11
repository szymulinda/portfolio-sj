import { Fraunces, IBM_Plex_Sans } from "next/font/google";

/**
 * Fraunces: optional so Slow 4G LCP is not held by late webfont paint.
 * Preload keeps the short optional block period fed when the network allows.
 */
export const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "optional",
  preload: true,
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
  preload: false,
});
