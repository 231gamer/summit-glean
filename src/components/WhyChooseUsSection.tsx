import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { valuePropositions } from "@/data/valuePropositions";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  Counter,
  MagneticButton,
  FloatingElement,
  PulseGlow,
  ParallaxElement,
} from "@/components/animations";

export function WhyChooseUsSection() {
  return (
    <section className="pt-12 lg:pt-16 pb-16 lg:pb-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container px-4 sm:px-6">
        {/* Section Header with Affordability Emphasis */}
        <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
          <FloatingElement intensity={5} duration={4}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              <PulseGlow color="rgba(59, 130, 246, 0.3)" intensity={8} duration={2}>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </PulseGlow>
              Affordable Excellence
            </div>
          </FloatingElement>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight">
            Quality Education
            <span className="block text-primary mt-2">Within Reach</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We make exceptional education accessible without compromising on quality,
            preparing Liberian students for successful careers and meaningful impact.
          </p>

          {/* Key Metric Banner */}
          <ParallaxElement speed={0.2} direction="up">
            <div className="inline-flex items-center justify-center gap-8 px-8 py-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border">
              <div className="text-center">
                <Counter
                  from={0}
                  to={90}
                  duration={2000}
                  className="text-3xl md:text-4xl font-bold text-primary"
                />
                <p className="text-sm font-medium">Graduate Employment Rate</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <Counter
                  from={0}
                  to={2}
                  duration={1500}
                  suffix="x"
                  className="text-3xl md:text-4xl font-bold text-primary"
                />
                <p className="text-sm font-medium">More Affordable Than Alternatives</p>
              </div>
            </div>
          </ParallaxElement>
        </ScrollReveal>

        {/* Value Grid - 6 items, responsive layout */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {valuePropositions.map((item, index) => (
            <StaggerItem key={item.title} delay={index * 0.1}>
              <Card
                className="group relative overflow-hidden border-2 border-transparent hover:border-amber-200 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Gold accent bar on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <CardHeader className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <FloatingElement intensity={3} duration={3} delay={index * 0.2}>
                        <PulseGlow
                          color="rgba(245, 158, 11, 0.2)"
                          intensity={12}
                          duration={3}
                          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300"
                        >
                          <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                        </PulseGlow>
                      </FloatingElement>
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
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action for Parents & Students */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="max-w-2xl mx-auto text-center">
            <ParallaxElement speed={0.1} direction="down">
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border group/cta hover:border-amber-200 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Ready to Invest in Your Future?</h3>
                <p className="text-muted-foreground mb-6">
                  Join a community where quality education meets financial accessibility.
                  Speak with our admissions team to learn about tuition plans and scholarships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton strength={0.4}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-amber-600 px-8 group/explore"
                    >
                      Explore Tuition & Fees
                      <span className="ml-2 group-hover/explore:translate-x-1 transition-transform">→</span>
                    </Button>
                  </MagneticButton>
                  <MagneticButton strength={0.4}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
                    >
                      Schedule Campus Visit
                    </Button>
                  </MagneticButton>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Financial aid and payment plans available for qualified students
                </p>
              </div>
            </ParallaxElement>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}