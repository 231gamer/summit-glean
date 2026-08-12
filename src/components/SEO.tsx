import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SITE_NAME = "Liberia Christian College";

function setMetaDescription(content: string) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Sets the document title and meta description for a route.
 * No react-helmet dependency needed — the project has no per-route SEO
 * pattern yet, so this keeps the footprint minimal.
 */
export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";

    document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    setMetaDescription(description);

    return () => {
      document.title = previousTitle;
      setMetaDescription(previousDescription);
    };
  }, [title, description]);

  return null;
}
