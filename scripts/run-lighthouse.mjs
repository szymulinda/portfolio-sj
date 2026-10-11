import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(".lighthouse");
fs.mkdirSync(outDir, { recursive: true });

const runs = [
  { page: "/", slug: "home", form: "mobile", args: ["--form-factor=mobile", "--screenEmulation.mobile"] },
  { page: "/", slug: "home", form: "desktop", args: ["--preset=desktop"] },
  { page: "/portfolio", slug: "portfolio", form: "mobile", args: ["--form-factor=mobile", "--screenEmulation.mobile"] },
  { page: "/portfolio", slug: "portfolio", form: "desktop", args: ["--preset=desktop"] },
];

for (const run of runs) {
  const out = path.join(outDir, `${run.slug}-${run.form}.json`);
  const args = [
    "lighthouse",
    `http://localhost:3011${run.page}`,
    "--quiet",
    "--chrome-flags=--headless --no-sandbox",
    "--only-categories=performance,accessibility,seo",
    "--output=json",
    `--output-path=${out}`,
    ...run.args,
  ];
  console.log(`Running ${run.slug} ${run.form}...`);
  const result = spawnSync("npx", args, { stdio: "inherit", shell: true });
  if (result.status !== 0) process.exit(result.status || 1);
  const json = JSON.parse(fs.readFileSync(out, "utf8"));
  const score = (key) => Math.round(json.categories[key].score * 100);
  console.log(
    `${run.slug} ${run.form}: perf=${score("performance")} a11y=${score("accessibility")} seo=${score("seo")} cls=${json.audits["cumulative-layout-shift"].numericValue} lcp=${Math.round(json.audits["largest-contentful-paint"].numericValue)}ms`,
  );
}
