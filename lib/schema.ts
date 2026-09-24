import { faqs, pricingPlans, site } from "@/lib/content";

export const SITE_URL = "https://szymonjurkun.pl";

/** Ręczne typy zamiast schema-dts — bez dodatkowej zależności w buildzie. */
export type JsonLd = Record<string, unknown>;

export const PERSON_ID = `${SITE_URL}/o-mnie#person`;
export const SERVICE_ID = `${SITE_URL}/#professional-service`;

export function professionalService(pageUrl: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: "Szymon Jurkun - strony internetowe i aplikacje",
    description: site.description,
    url: pageUrl,
    priceRange: "3500-20000 PLN",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 50.6751,
        longitude: 17.9213,
      },
      geoRadius: 80000,
    },
    founder: {
      "@id": PERSON_ID,
    },
    knowsLanguage: "pl",
    // taxID: "TODO: uzupełnić NIP",
  };
}

export function person(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Szymon Jurkun",
    jobTitle: "Inżynier oprogramowania",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Akademia Górniczo-Hutnicza im. Stanisława Staszica w Krakowie",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tworzenie stron internetowych",
      "Aplikacje webowe",
      "SEO techniczne",
    ],
    // sameAs: [
    //   "TODO: uzupełnić LinkedIn",
    //   "TODO: uzupełnić GitHub, jeśli profil jest publiczny",
    // ],
    worksFor: {
      "@id": SERVICE_ID,
    },
  };
}

export type FaqItemData = {
  question: string;
  answer: string;
};

export function faqPage(items: FaqItemData[] = faqs): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbList(path: string, name: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

export function serviceOffers(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tworzenie stron internetowych",
    url: `${SITE_URL}/cennik`,
    provider: {
      "@id": SERVICE_ID,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pakiety stron internetowych",
      itemListElement: pricingPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.priceValue,
        priceCurrency: "PLN",
      })),
    },
  };
}
