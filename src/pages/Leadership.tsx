import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations";
import { User, Users } from "lucide-react";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  const president = [...leadership].sort((a, b) => a.order - b.order)[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Leadership"
        description="Meet the leaders guiding Liberia Christian College's academic mission and institutional growth."
      />
      <Header />

      <PageHero
        eyebrow="About LCC"
        title="Leadership"
        description="Meet the leaders serving Liberia Christian College and helping advance its mission of Christian education, academic excellence, and service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      {/* President Feature */}
      {president && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <ScrollReveal direction="up">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="bg-primary/5 flex items-center justify-center p-10">
                    {president.image ? (
                      <img
                        src={president.image}
                        alt={president.name}
                        className="w-40 h-40 rounded-full object-cover border-4 border-accent/40"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-primary/10 border-4 border-dashed border-primary/30 flex items-center justify-center">
                        <User className="h-16 w-16 text-primary/40" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge variant="gold" className="w-fit mb-3">
                      {president.title}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                      {president.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{president.shortBio}</p>
                    {president.isPlaceholder && (
                      <p className="text-xs text-muted-foreground/70 mt-4 italic">
                        Photo and biography to be updated by the President's office.
                      </p>
                    )}
                  </CardContent>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Additional Leadership */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container max-w-2xl text-center">
          <ScrollReveal direction="up">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Senior Leadership Team</h2>
            <p className="text-muted-foreground mb-6">
              Additional senior leadership profiles will be published here as LCC's organizational directory is
              confirmed. In the meantime, the Admissions Office can direct your inquiry to the right office.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about/faculty-staff">Meet Our Faculty & Staff</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
