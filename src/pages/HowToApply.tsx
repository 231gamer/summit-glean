import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import { applicationSteps, applicationTips } from "@/data/howToApply";

export default function HowToApply() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How to Apply"
        description="A step-by-step guide to applying to Liberia Christian College."
      />
      <Header />

      <PageHero
        eyebrow="Admissions"
        title="How to Apply"
        description="Follow these six steps to complete your application to Liberia Christian College."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "How to Apply" },
        ]}
        primaryCta={{ label: "Start Application", to: "/apply" }}
      />

      {/* Application Steps */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="relative">
            {applicationSteps.map((step, index) => (
              <ScrollReveal key={step.number} direction="up" delay={index * 0.05}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {step.number}
                    </span>
                    {index < applicationSteps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <Card className="flex-1 mb-2">
                    <CardContent className="p-5">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <Lightbulb className="h-10 w-10 text-accent-dark mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Application Tips</h2>
            <p className="text-muted-foreground">A few things to keep in mind before you submit.</p>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {applicationTips.map((tip) => (
              <StaggerItem key={tip}>
                <div className="p-4 rounded-xl bg-background border border-border h-full">
                  <p className="text-sm text-foreground">{tip}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Ready When You Are</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            The full application lives on our secure Apply page — pick up right where this guide left off.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/apply">Start Application</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
