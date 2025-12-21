import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The research opportunities here transformed my career trajectory. I worked alongside Nobel laureates during my undergraduate years.",
    name: "Dr. Michael Chen",
    role: "Class of 2018, Now at MIT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "The close-knit community and dedicated faculty made all the difference. I found mentors who genuinely cared about my growth.",
    name: "Sarah Johnson",
    role: "Current PhD Candidate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "From day one, I was encouraged to think critically and push boundaries. That mindset has shaped my entire career.",
    name: "James Williams",
    role: "Class of 2020, Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function CampusLifeSection() {
  return (
    <section id="campus-life" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Campus Life
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Experience the Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Join a vibrant campus community where lifelong friendships are forged and memories are made.
          </p>
        </div>

        {/* Campus Images Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="relative group overflow-hidden rounded-2xl md:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
              alt="Students studying together"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <h3 className="text-xl font-heading font-bold mb-1">Student Life</h3>
              <p className="text-sm text-primary-foreground/80">300+ student organizations</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
              alt="Campus library"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <h3 className="font-heading font-bold">Libraries</h3>
              <p className="text-sm text-primary-foreground/80">5 million+ volumes</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1461896836934- voices=21cc55-0a1dd7228f2d?w=800&q=80"
              alt="Athletics"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <h3 className="font-heading font-bold">Athletics</h3>
              <p className="text-sm text-primary-foreground/80">25 varsity sports</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
              alt="Research facilities"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <h3 className="font-heading font-bold">Research</h3>
              <p className="text-sm text-primary-foreground/80">$500M+ annual funding</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt="Classroom"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <h3 className="font-heading font-bold">Small Classes</h3>
              <p className="text-sm text-primary-foreground/80">12:1 student-faculty ratio</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-heading font-bold text-center mb-10 text-foreground">
            What Our Community Says
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-6 border border-border shadow-card"
              >
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Schedule a Campus Visit
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
