/**
 * Copies dist/index.html to dist/404.html after the Vite build (see "postbuild"
 * in package.json). GitHub Pages serves 404.html (with a real 404 status) for any
 * unmatched path, which lets the SPA's client-side router render the real NotFound
 * page instead of GitHub Pages' generic 404. Harmless no-op on Netlify/Vercel.
 */
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(import.meta.dirname, "../dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
  console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA fallback.");
} else {
  console.warn("dist/index.html not found; skipping 404.html generation.");
}
