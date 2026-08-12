import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { facultyStaffCategories } from "@/data/facultyStaff";

export default function FacultyStaff() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Faculty & Staff"
        description="Meet the dedicated faculty and staff who contribute to the academic and student experience at Liberia Christian College."
      />
      <Header />

      <PageHero
        eyebrow="About LCC"
        title="Faculty & Staff"
        description="Meet the dedicated faculty and staff who contribute to the academic and student experience at Liberia Christian College."
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Faculty & Staff" },
        ]}
      />

      {/* Current State */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <ScrollReveal direction="up">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Faculty & Staff Directory</h2>
            <p className="text-muted-foreground leading-relaxed">
              Detailed faculty and staff profiles will be available here as we continue expanding our institutional
              directory. LCC's academic and administrative community spans every College & School — from instructors
              in the classroom to the staff who support student life day to day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Future-ready directory categories */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <StaggerContainer className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {facultyStaffCategories.map((category) => (
              <StaggerItem key={category.title}>
                <Card className="h-full text-center card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                      Directory Coming Soon
                    </span>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Want to Learn More About LCC?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Meet our current senior leadership or reach out to Admissions with any questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <Link to="/about/leadership">Meet Our Leadership</Link>
            </Button>
            <Button variant="hero-secondary" size="lg" asChild>
              <Link to="/contact">Contact LCC</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
