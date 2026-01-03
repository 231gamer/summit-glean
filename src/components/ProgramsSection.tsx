import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Beaker, Scale, Stethoscope, Cpu, Palette, Building2 } from "lucide-react";

const programs = [
    {
    icon: Building2,
    title: "School of Business",
    description: "Prepare for leadership in today’s global economy through programs in Accounting, Finance, Management, Entrepreneurship, Project Management, and more.",
    programs: ["Finance", "Marketing", "Economics"],
    featured: true,
  },
  {
    icon: Scale,
    title: "School of Liberal Arts",
    description: "Prepare for careers in law, government, and public service leadership.",
    programs: ["Law", "Public Administration", "Political Science"],
    featured: false,
  },
  
  {
    icon: Stethoscope,
    title: "School of Public Health & Environmental Science",
    description: "Address critical health and environmental challenges through programs in Public Health and Environmental Science.",
    programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
    featured: false,
  },
    {
    icon: Beaker,
    title: "School of Science & Technology",
    description: "Build in-demand technical skills in Computer Networking, Data Science, Management Information Systems, and Telecommunications.",
    programs: ["Physics", "Chemistry", "Biology", "Mechanical Engineering"],
    featured: true,
  },
  {
    icon: Cpu,
    title: "Christian Education",
    description: "Master the technologies shaping our digital future.",
    programs: ["Theology", "Data Science", "Cybersecurity", "Church Administration"],
    featured: false,
  },
  {
    icon: Palette,
    title: "School of Education",
    description: "Train as an educator and leader with programs in Early Childhood, Primary, Secondary Education, Guidance & Counseling, and Education Management.",
    programs: ["Fine Arts", "Music", "Literature", "Philosophy"],
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
            Choose from over 100 undergraduate and professional programs across six distinguished schools.
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
