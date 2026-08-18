/**
 * Single source of truth for site-wide SEO/brand constants.
 * Verified facts only — see Header/Footer for the same values in UI form.
 */
export const SITE_NAME = "Liberia Christian College";
export const SITE_URL = "https://liberiachristiancollege.com";
export const SITE_MOTTO = "Preparing Men and Women for Ministry and Professional Discipline";
export const SITE_DESCRIPTION =
  "Liberia Christian College (LCC) is a Christian institution of higher learning in Monrovia, Liberia, preparing men and women for ministry and professional discipline.";
export const DEFAULT_OG_IMAGE = "/lcc-logo.png";
export const DEFAULT_OG_IMAGE_ALT = "Liberia Christian College logo";
export const FOUNDING_YEAR = "1997";
export const CONTACT_EMAIL = "lccedu1997@gmail.com";
export const CONTACT_PHONES = ["+231777947739", "+231778747451"];
export const CONTACT_ADDRESS = {
  streetAddress: "5th Street & Dixville",
  addressLocality: "Monrovia",
  addressCountry: "LR",
};

/**
 * Builds an absolute, canonical URL for a given site-relative path.
 * Strips query strings/hashes and trailing slashes (except for the root)
 * so canonicals stay stable regardless of how a route was reached.
 */
export function absoluteUrl(path: string): string {
  const cleanPath = path.split("?")[0].split("#")[0];
  const normalized = cleanPath.length > 1 ? cleanPath.replace(/\/+$/, "") : cleanPath;
  const withLeadingSlash = normalized.startsWith("/") ? normalized : `/${normalized}`;
  return `${SITE_URL}${withLeadingSlash === "" ? "/" : withLeadingSlash}`;
}
