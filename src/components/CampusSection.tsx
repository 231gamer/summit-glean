import { campuses, facilities } from "@/data/campus";
import { Card, CardContent } from "@/components/ui/card";

export function CampusSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Campus & Facilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Learn in a Structured, Supportive Environment
          </h2>
          <p className="text-muted-foreground text-lg">
            Our campuses and facilities are designed to support focused learning,
            practical training, and student success.
          </p>
        </div>

        {/* Campuses */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {campuses.map((campus) => (
            <Card key={campus.name} className="overflow-hidden">
              <img
                src={campus.image}
                alt={campus.name}
                className="h-64 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {campus.name}
                </h3>
                <p className="text-muted-foreground">
                  {campus.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.title} className="overflow-hidden">
              <img
                src={facility.image}
                alt={facility.title}
                className="h-56 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
