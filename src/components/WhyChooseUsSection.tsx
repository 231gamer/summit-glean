import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { valuePropositions } from "@/data/valuePropositions";

export function WhyChooseUsSection() {
  return (
    <section className="pt-12 lg:pt-16 pb-16 lg:pb-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 sm:px-6">
        {/* Section Header with Affordability Emphasis */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Affordable Excellence
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
            Quality Education
            <span className="block text-primary mt-2">Within Reach</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We make exceptional education accessible without compromising on quality, 
            preparing Liberian students for successful careers and meaningful impact.
          </p>
          
          {/* Key Metric Banner */}
          <div className="inline-flex items-center justify-center gap-8 px-8 py-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">90%</div>
              <p className="text-sm font-medium">Graduate Employment Rate</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">2x</div>
              <p className="text-sm font-medium">More Affordable Than Alternatives</p>
            </div>
          </div>
        </div>

        {/* Value Grid - 6 items, responsive layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {valuePropositions.map((item) => (
            <Card 
              key={item.title} 
              className="group relative overflow-hidden border-2 border-transparent hover:border-amber-200 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Gold accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>
                    
                    {/* Special highlight for affordability-related items */}
                    {(item.title.includes("Accredited") || item.title.includes("Multiple Campuses")) && (
                      <div className="inline-flex items-center gap-1 mt-4 px-3 py-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Cost-Effective
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Call to Action for Parents & Students */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border group/cta hover:border-amber-200 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Ready to Invest in Your Future?</h3>
            <p className="text-muted-foreground mb-6">
              Join a community where quality education meets financial accessibility. 
              Speak with our admissions team to learn about tuition plans and scholarships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-amber-600 px-8 group/explore"
              >
                Explore Tuition & Fees
                <span className="ml-2 group-hover/explore:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
              >
                Schedule Campus Visit
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Financial aid and payment plans available for qualified students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}