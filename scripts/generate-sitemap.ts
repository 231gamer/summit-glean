/**
 * Generates public/sitemap.xml before the Vite build (see "prebuild" in package.json)
 * so Vite copies it into dist/ automatically. Static routes are kept in sync with
 * src/App.tsx by hand; dynamic program routes are pulled directly from
 * src/data/colleges/programs.ts so new programs appear without touching this file.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { featuredPrograms } from "../src/data/colleges/programs";
import { slugify } from "../src/lib/slug";
import { SITE_URL } from "../src/lib/seo";

// Keep in sync with the public, indexable routes declared in src/App.tsx.
// Excludes the "*" catch-all (NotFound) and any route that sets noindex.
const staticRoutes = [
  "/",
  "/colleges",
  "/about",
  "/about/leadership",
  "/about/faculty-staff",
  "/contact",
  "/apply",
  "/admissions",
  "/admissions/requirements",
  "/admissions/tuition",
  "/admissions/scholarships",
  "/admissions/how-to-apply",
  "/updates",
  "/updates/news",
  "/updates/events",
];

const programRoutes = featuredPrograms.map((program) => `/programs/${slugify(program.title)}`);

const allRoutes = [...staticRoutes, ...programRoutes];

const urlEntries = allRoutes
  .map((route) => {
    const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
    const priority = route === "/" ? "1.0" : route.startsWith("/programs/") ? "0.7" : "0.8";
    return `  <url>\n    <loc>${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const currentDir = fileURLToPath(new URL(".", import.meta.url));
const outputPath = resolve(currentDir, "../public/sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

console.log(`Generated sitemap.xml with ${allRoutes.length} URLs (${programRoutes.length} program pages).`);
