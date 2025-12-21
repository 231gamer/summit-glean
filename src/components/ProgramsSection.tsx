import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Beaker, Scale, Stethoscope, Cpu, Palette, Building2 } from "lucide-react";

const programs = [
  {
    icon: Beaker,
    title: "Sciences & Engineering",
    description: "Cutting-edge research in physics, chemistry, biology, and engineering disciplines.",
    programs: ["Physics", "Chemistry", "Biology", "Mechanical Engineering"],
    featured: true,
  },
  {
    icon: Scale,
    title: "Law & Public Policy",
    description: "Prepare for careers in law, government, and public service leadership.",
    programs: ["Law", "Public Administration", "Political Science"],
    featured: false,
  },
  {
    icon: Stethoscope,
    title: "Health Sciences",
    description: "Train to be healthcare leaders with our renowned medical programs.",
    programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
    featured: false,
  },
  {
    icon: Cpu,
    title: "Technology & Computing",
    description: "Master the technologies shaping our digital future.",
    programs: ["Computer Science", "Data Science", "Cybersecurity"],
    featured: true,
  },
  {
    icon: Palette,
    title: "Arts & Humanities",
    description: "Explore creativity, culture, and critical thinking through diverse artistic disciplines.",
    programs: ["Fine Arts", "Music", "Literature", "Philosophy"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Business & Economics",
    description: "Develop leadership skills for the global marketplace.",
    programs: ["MBA", "Finance", "Marketing", "Economics"],
    featured: false,
  },
];

export function ProgramsSection() {
  return (
    <section id="academics" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Our Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from over 200 undergraduate and graduate programs across six distinguished schools.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card
              key={program.title}
              featured={program.featured}
              className="card-hover group"
            >
              <CardHeader featured={program.featured}>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  {program.featured && (
                    <Badge variant="gold">Featured</Badge>
                  )}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {program.programs.map((p) => (
                    <Badge key={p} variant="purple" className="text-xs">
                      {p}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="tertiary" className="group/btn p-0">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Programs
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
