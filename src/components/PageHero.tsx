import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollReveal } from "@/components/animations";
import { cn } from "@/lib/utils";

interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface PageHeroCta {
  label: string;
  to: string;
  icon?: ReactNode;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: BreadcrumbEntry[];
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  className?: string;
}

/**
 * Standard hero used across the new Admissions/About/Updates pages:
 * optional breadcrumb, title, supporting copy, optional CTAs, optional
 * background image with overlay. Mirrors the hero pattern already used on
 * ProgramDetails/Apply/About/Contact rather than inventing new visuals.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-20",
        image ? "overflow-hidden" : "gradient-hero",
        className
      )}
    >
      {image && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/80" />
        </div>
      )}

      <div className="container relative">
        <div className="max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb className="mb-6">
              <BreadcrumbList className="text-primary-foreground/70">
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb.label} className="flex items-center gap-1.5 sm:gap-2.5">
                    <BreadcrumbItem>
                      {crumb.href ? (
                        <BreadcrumbLink asChild>
                          <Link to={crumb.href} className="hover:text-accent transition-colors">
                            {crumb.label}
                          </Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="text-primary-foreground">{crumb.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </span>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}

          <ScrollReveal direction="up">
            {eyebrow && (
              <Badge variant="gold" className="mb-4">
                {eyebrow}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">{title}</h1>
            {description && <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">{description}</p>}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta && (
                  <Button variant="gold" size="lg" asChild>
                    <Link to={primaryCta.to}>
                      {primaryCta.icon}
                      {primaryCta.label}
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant="hero-secondary" size="lg" asChild>
                    <Link to={secondaryCta.to}>
                      {secondaryCta.icon}
                      {secondaryCta.label}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
