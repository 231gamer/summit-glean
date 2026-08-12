import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollReveal } from "@/components/animations";
import { Link } from "react-router-dom";
import { CheckCircle2, Info } from "lucide-react";
import { requirementCategories } from "@/data/admissionRequirements";

export default function AdmissionRequirements() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Admission Requirements"
        description="Review what you need to apply to Liberia Christian College, including required documents."
      />
      <Header />

      <PageHero
        eyebrow="Admissions"
        title="Admission Requirements"
        description="Requirements can vary by applicant background and program. Here's what every applicant should prepare, and where to check program-specific details."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Requirements" },
        ]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl space-y-10">
          {requirementCategories.map((category) => (
            <ScrollReveal key={category.title} direction="up">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">{category.title}</h2>
                  <p className="text-muted-foreground mb-6">{category.description}</p>

                  {category.isPlaceholder ? (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Additional program-specific requirements will be published here as they're confirmed.
                        Visit a{" "}
                        <Link to="/colleges#programs" className="text-primary font-medium hover:underline">
                          program page
                        </Link>{" "}
                        or contact the Admissions Office to confirm requirements for your program of interest.
                      </p>
                    </div>
                  ) : (
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {category.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card"
                        >
                          <CheckCircle2 className="h-5 w-5 text-accent-dark mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Requirements shown above reflect current LCC admissions information and may be updated. Contact the
              Admissions Office to confirm requirements before you apply.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Ready to Apply?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Once you have your documents ready, starting your application only takes a few minutes.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/apply">Start Your Application</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
