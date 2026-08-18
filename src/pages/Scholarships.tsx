import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Phone } from "lucide-react";
import { scholarshipCategories, financialAidSteps } from "@/data/scholarships";
import { admissionsContact } from "@/data/tuition";

export default function Scholarships() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Scholarships & Financial Aid"
        description="Learn how to seek scholarships and financial aid opportunities at Liberia Christian College."
      />
      <Header />

      <PageHero
        eyebrow="Admissions"
        title="Scholarships & Financial Aid"
        description="We're committed to helping students understand the financial support that may be available to them."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Scholarships & Financial Aid" },
        ]}
      />

      {/* Scholarship Opportunities */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="purple" className="mb-4">
              Scholarship Opportunities
            </Badge>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-3">Ways to Fund Your Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're actively building out our scholarship and financial aid offerings. Categories below reflect the
              kinds of support we're working to provide.
            </p>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarshipCategories.map((category) => (
              <StaggerItem key={category.title}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    {category.isPlaceholder && (
                      <Badge variant="outline" className="text-xs">
                        Coming Soon
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How to Seek Financial Assistance */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-3xl">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
              How to Seek Financial Assistance
            </h2>
            <ol className="space-y-4">
              {financialAidSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Have Questions About Financial Aid?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Reach out and our Admissions Office will help you understand your options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href={`tel:${admissionsContact.phones[0].replace(/[^+\d]/g, "")}`}>
                <Phone className="h-4 w-4 mr-2" />
                Contact the Admissions Office
              </a>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <Link to="/admissions/how-to-apply">See How to Apply</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
