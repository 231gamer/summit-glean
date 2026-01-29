import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { Star, Quote, ArrowRight, GraduationCap, Briefcase } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="pt-16 lg:pt-20 pb-20 lg:pb-28 bg-gradient-to-b from-muted/20 to-background">
      <div className="container px-4 sm:px-6">
        {/* Section Header - Enhanced */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <Quote className="h-4 w-4" />
            Alumni Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 tracking-tight">
            Transforming Lives Through
            <span className="block text-primary mt-2">Quality Education</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hear from our graduates who are making impact in their communities and careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Gold accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quote icon decoration */}
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-12 w-12" />
              </div>

              <CardContent className="p-7">
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < (testimonial.rating || 5) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">5.0</span>
                </div>

                {/* Testimonial quote */}
                <blockquote className="mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-6 border-t">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-amber-300 transition-colors">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span>{testimonial.program}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{testimonial.currentRole}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {testimonial.year}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm font-medium">Alumni Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <p className="text-sm font-medium">Employed Within 6 Months</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-sm font-medium">Average Rating</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of successful graduates who started their journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-amber-600 px-8 group/apply"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/apply:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
                >
                  Meet More Alumni
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}