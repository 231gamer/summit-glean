import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const stats = [
  { icon: GraduationCap, value: "25,000+", label: "Graduates Trained" },
  { icon: BookOpen, value: "200+", label: "Accredited Programs" },
  { icon: Users, value: "1,800+", label: "Faculty & Staff" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="Liberia Christian College campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Urgency Badge */}
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-medium bg-accent/20 text-accent">
            Sem II Admissions Now Open
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Accredited Education Rooted in{" "}
            <span className="text-gradient-gold">Christian Values</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Liberia Christian College prepares students with academic excellence,
            ethical leadership, and practical skills needed to thrive in today’s
            world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" className="group">
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button variant="hero-secondary" size="lg">
              View Programs
            </Button>
          </div>
        </div>

        {/* Proof / Credibility */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-5 py-4"
            >
              <stat.icon className="h-7 w-7 text-accent" />
              <div>
                <div className="text-xl font-heading font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
