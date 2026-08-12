import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Link } from "react-router-dom";
import { AlertTriangle, Mail, Phone } from "lucide-react";
import { tuitionByYear, admissionsContact } from "@/data/tuition";

export default function Tuition() {
  const activeYear = tuitionByYear[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Tuition & Fees"
        description="Understand the cost of attending Liberia Christian College for the current academic year."
      />
      <Header />

      <PageHero
        eyebrow="Admissions"
        title="Tuition & Fees"
        description="A clear understanding of the cost of attending LCC helps you plan ahead with confidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Tuition & Fees" },
        ]}
      />

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <ScrollReveal direction="up" className="text-center mb-10">
            <Badge variant="purple" className="mb-4">
              {activeYear.academicYear} Academic Year
            </Badge>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Tuition Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tuition varies by program. Figures below will be published as soon as they're finalized for the{" "}
              {activeYear.academicYear} academic year.
            </p>
          </ScrollReveal>

          {activeYear.isPlaceholder && (
            <Alert className="mb-10 border-accent/40 bg-accent-light/40">
              <AlertTriangle className="h-4 w-4 text-accent-dark" />
              <AlertDescription className="text-accent-foreground">
                Tuition information for {activeYear.academicYear} is coming soon. Contact the Admissions Office for
                the most current figures.
              </AlertDescription>
            </Alert>
          )}

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {activeYear.categories.map((category) => (
              <StaggerItem key={category.title}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item.label} className="flex items-center justify-between gap-4">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-semibold text-foreground text-right">
                            {item.amount ?? item.note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Program-specific tuition */}
          <Card className="mt-10">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">Program-Specific Tuition</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tuition can differ by program. Once confirmed, per-program figures will appear on each program's
                page.
              </p>
              <Link to="/colleges#programs" className="text-sm font-semibold text-primary hover:underline">
                Browse Programs &rarr;
              </Link>
            </CardContent>
          </Card>

          <Alert className="mt-10">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Tuition and fees are subject to change. Please contact the Admissions Office for the most current
              information.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Have Questions About Cost?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            The Admissions Office can walk you through tuition, fees, and payment options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href={`mailto:${admissionsContact.email}`}>
                <Mail className="h-4 w-4 mr-2" />
                Email Admissions
              </a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <a href={`tel:${admissionsContact.phones[0].replace(/[^+\d]/g, "")}`}>
                <Phone className="h-4 w-4 mr-2" />
                Call Admissions
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
