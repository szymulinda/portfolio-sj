import path from "node:path";
import type { NextConfig } from "next";

const redirect301 = (source: string, destination: string) => [
  { source, destination, statusCode: 301 as const },
  { source: `${source}/`, destination, statusCode: 301 as const },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      ...redirect301("/realizacje", "/portfolio"),
      ...redirect301("/seo", "/tworzenie-stron-www-opole"),
      ...redirect301("/polityka", "/polityka-prywatnosci"),
    ];
  },
};

export default nextConfig;
