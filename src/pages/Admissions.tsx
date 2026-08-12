import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  DollarSign,
  Award,
  FileCheck,
  ArrowRight,
  Phone,
  GraduationCap,
} from "lucide-react";
import { featuredPrograms } from "@/data/colleges";
import { applicationSteps } from "@/data/howToApply";
import { admissionsContact } from "@/data/tuition";
import { slugify } from "@/lib/slug";

const resourceCards = [
  {
    icon: ClipboardList,
    title: "Admission Requirements",
    description: "What you need before you apply, including required documents.",
    href: "/admissions/requirements",
  },
  {
    icon: DollarSign,
    title: "Tuition & Fees",
    description: "Understand the cost of attending Liberia Christian College.",
    href: "/admissions/tuition",
  },
  {
    icon: Award,
    title: "Scholarships & Financial Aid",
    description: "Explore support opportunities available to LCC students.",
    href: "/admissions/scholarships",
  },
  {
    icon: FileCheck,
    title: "How to Apply",
    description: "A step-by-step walkthrough of the application process.",
    href: "/admissions/how-to-apply",
  },
];

export default function Admissions() {
  const spotlightPrograms = featuredPrograms.filter((program) => program.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Admissions"
        description="Explore admissions at Liberia Christian College: programs, requirements, tuition, financial aid, and how to apply."
      />
      <Header />

      <PageHero
        eyebrow="Admissions"
        title="Begin Your Journey at Liberia Christian College"
        description="Explore our programs, review admission requirements, understand the cost of attendance, and take the next step toward a recognized degree at LCC."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop&q=80"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
        primaryCta={{ label: "Apply Now", to: "/apply" }}
        secondaryCta={{ label: "Explore Programs", to: "/colleges#programs" }}
      />

      {/* Admissions Introduction */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <ScrollReveal direction="up">
            <Badge variant="purple" className="mb-4">
              Our Admissions Philosophy
            </Badge>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">A Welcoming Path to LCC</h2>
            <p className="text-muted-foreground leading-relaxed">
              We designed our admissions process to be clear and welcoming for every prospective student. Whether
              you're coming straight from secondary school or returning to further your education, our Admissions
              Office is here to guide you from your first inquiry to the day you begin classes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How Admissions Works */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">How Admissions Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six straightforward steps take you from exploring programs to an admission decision.
            </p>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationSteps.map((step) => (
              <StaggerItem key={step.number}>
                <Card className="h-full card-hover">
                  <CardContent className="p-6">
                    <div className="text-3xl font-heading font-bold text-accent mb-3">{step.number}</div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Admissions Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Admissions Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to plan and complete your application.
            </p>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCards.map((resource) => (
              <StaggerItem key={resource.title}>
                <Link to={resource.href} className="block h-full">
                  <Card className="h-full card-hover">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Explore Programs */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Explore Programs</h2>
              <p className="text-muted-foreground max-w-xl">
                A sample of the programs offered across LCC's Colleges & Schools.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/colleges#programs">
                Explore All Programs <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlightPrograms.map((program) => (
              <StaggerItem key={program.id}>
                <Link to={`/programs/${slugify(program.title)}`} className="block h-full">
                  <Card featured className="h-full card-hover overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="gold" className="w-fit mb-1">
                        {program.degree}
                      </Badge>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{program.school}</p>
                    </CardHeader>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container text-center">
          <GraduationCap className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Begin Your LCC Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Our Admissions Office is ready to help you take the next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <a href={`tel:${admissionsContact.phones[0].replace(/[^+\d]/g, "")}`}>
                <Phone className="h-4 w-4 mr-2" />
                Contact Admissions
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
