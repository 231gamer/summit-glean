import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { valuePropositions } from "@/data/valuePropositions";

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Built on Credibility. Driven by Purpose.
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine academic excellence, practical training, and national relevance
            to prepare students for meaningful careers.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePropositions.map((item) => (
            <Card key={item.title} className="card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
