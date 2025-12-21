import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step toward an exceptional education. Apply now for Fall 2025 admission or schedule a campus visit to experience our community firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="group">
              Apply Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-secondary" size="lg">
              Request Information
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-14 pt-10 border-t border-primary-foreground/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "Jan 15", label: "Early Decision Deadline" },
                { value: "Mar 1", label: "Regular Decision Deadline" },
                { value: "Apr 1", label: "Notification Date" },
                { value: "May 1", label: "Commitment Deadline" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xl md:text-2xl font-heading font-bold text-accent mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
