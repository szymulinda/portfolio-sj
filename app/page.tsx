import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProjectsSection from "@/components/ProjectsSection";
import OfferSection from "@/components/OfferSection";
import ProcessSection from "@/components/ProcessSection";
import HomeFaqSection from "@/components/HomeFaqSection";
import AboutSection from "@/components/AboutSection";
import JsonLd from "@/components/JsonLd";
import { ogImage } from "@/lib/metadata";
import { homeFaqs } from "@/lib/content";
import { faqPage, professionalService, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Strony internetowe Opole - Szymon Jurkun",
  },
  description:
    "Strony internetowe dla firm z Opola i okolic. Dedykowany kod zamiast szablonów WordPress, ładowanie poniżej sekundy, jawne ceny od 3 500 zł netto.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Strony internetowe Opole - Szymon Jurkun",
    description:
      "Strony internetowe dla firm z Opola i okolic. Dedykowany kod zamiast szablonów WordPress, ładowanie poniżej sekundy, jawne ceny od 3 500 zł netto.",
    type: "website",
    locale: "pl_PL",
    url: "/",
    images: [ogImage],
  },
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={professionalService(SITE_URL)} />
      <JsonLd data={faqPage(homeFaqs)} />
      <Hero />
      <ProjectsSection />
      <OfferSection />
      <ProblemSection />
      <ProcessSection />
      <HomeFaqSection />
      <AboutSection />
    </main>
  );
}
