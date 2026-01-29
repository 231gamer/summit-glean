import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Building2 } from "lucide-react";
import { schools } from "@/data/colleges/schools";

export function ProgramsSection() {
  return (
    <section id="academics" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Academics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Colleges & Schools
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our academic structure across undergraduate degrees and professional training programs.
          </p>
        </div>

        {/* Schools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <Card key={school.name} className="group card-hover">
              <CardHeader>
                {school.category === "continuing" && (
                  <Badge variant="gold" className="mb-3 w-fit">
                    Professional Training
                  </Badge>
                )}

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>

                <CardTitle className="group-hover:text-primary transition-colors">
                  {school.name}
                </CardTitle>

                <CardDescription>
                  {school.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex gap-3">
                {school.category === "continuing" ? (
                  <Button variant="gold" className="flex-1 group">
                    View Short Courses
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button variant="purple" className="flex-1 group">
                    View College
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}

                <Button variant="outline" size="icon" aria-label="External link">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Button variant="outline" size="lg">
            Explore All Colleges
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
