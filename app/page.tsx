import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";
import { ogImage } from "@/lib/metadata";
import { professionalService, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Strony internetowe Opole — Szymon Jurkun",
  },
  description:
    "Strony internetowe dla firm z Opola i okolic. Dedykowany kod zamiast szablonów WordPress, ładowanie poniżej sekundy, jawne ceny od 3 500 zł netto.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Strony internetowe Opole — Szymon Jurkun",
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
      <Hero />
      <ProblemSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
