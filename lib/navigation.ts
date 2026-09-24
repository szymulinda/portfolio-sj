export const mainNav = [
  { href: "/tworzenie-stron-www-opole", label: "Usługi" },
  { href: "/portfolio", label: "Projekty" },
  { href: "/cennik", label: "Cennik" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNav = [
  ...mainNav,
  { href: "/aplikacje-webowe", label: "Aplikacje webowe" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/opieka-techniczna", label: "Opieka techniczna" },
  { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
] as const;

export const sitemapRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  {
    path: "/tworzenie-stron-www-opole",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/aplikacje-webowe",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: "2026-09-24",
  },
  {
    path: "/opieka-techniczna",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: "2026-09-24",
  },
  {
    path: "/cennik",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: "2026-09-24",
  },
  {
    path: "/portfolio",
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: "2026-09-24",
  },
  {
    path: "/o-mnie",
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: "2026-09-24",
  },
  { path: "/kontakt", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/polityka-prywatnosci",
    priority: 0.7,
    changeFrequency: "yearly" as const,
  },
] as const;
