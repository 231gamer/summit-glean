import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  absoluteUrl,
} from "@/lib/seo";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface SEOProps {
  /** Page title. `| Liberia Christian College` is appended automatically unless already present. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/about". Defaults to the current route. Use for routes with query params. */
  path?: string;
  /** Absolute URL or root-relative path (e.g. "/lcc-logo.png"). Defaults to the site logo. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  /** Excludes the page from search indexing. Use only for genuinely non-public routes (e.g. 404). */
  noindex?: boolean;
  /** Breadcrumb trail for BreadcrumbList structured data. Pass the same entries used for the visible breadcrumb UI. */
  breadcrumbs?: BreadcrumbEntry[];
  /** Additional JSON-LD schema object(s) specific to this page. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function removeMetaByProperty(property: string) {
  document.querySelector(`meta[property="${property}"]`)?.remove();
}

function setCanonicalLink(href: string) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function resolveImageUrl(image: string): string {
  return /^https?:\/\//i.test(image) ? image : absoluteUrl(image);
}

function buildBreadcrumbJsonLd(breadcrumbs: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: absoluteUrl(crumb.href) } : {}),
    })),
  };
}

/**
 * Manages per-route document head metadata: title, description, canonical,
 * Open Graph, Twitter Card, robots, and structured data. No react-helmet
 * dependency — tags are written directly and cleaned up on unmount so SPA
 * route transitions never leave stale or duplicate tags behind.
 */
export function SEO({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  breadcrumbs,
  jsonLd,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = absoluteUrl(path ?? location.pathname);
    const resolvedImage = resolveImageUrl(image ?? DEFAULT_OG_IMAGE);
    const resolvedImageAlt = imageAlt ?? DEFAULT_OG_IMAGE_ALT;

    document.title = fullTitle;
    setMetaByName("description", description);
    setMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonicalLink(canonicalUrl);

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:type", type);
    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:image", resolvedImage);
    setMetaByProperty("og:image:alt", resolvedImageAlt);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", resolvedImage);
    setMetaByName("twitter:image:alt", resolvedImageAlt);

    const schemas: Record<string, unknown>[] = [];
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(buildBreadcrumbJsonLd(breadcrumbs));
    }
    if (jsonLd) {
      schemas.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));
    }

    const scriptEls = schemas.map((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", String(index));
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = previousTitle;
      scriptEls.forEach((script) => script.remove());
      removeMetaByProperty("og:image:alt");
    };
  }, [title, description, path, location.pathname, image, imageAlt, type, noindex, breadcrumbs, jsonLd]);

  return null;
}
