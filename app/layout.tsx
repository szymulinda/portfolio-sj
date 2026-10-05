import type { Metadata } from "next";
import { fraunces, ibmPlexSans } from "@/lib/fonts";
import { site } from "@/lib/content";
import { ogImage } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://szymonjurkun.pl"),
  title: {
    default: "Strony internetowe Opole - Szymon Jurkun",
    template: "%s · szymonjurkun.pl",
  },
  description: site.description,
  openGraph: {
    images: [ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${fraunces.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className={`${ibmPlexSans.className} min-h-full bg-bg text-text`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
