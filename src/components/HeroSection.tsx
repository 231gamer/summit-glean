import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, Award } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const stats = [
  { icon: GraduationCap, value: "25,000+", label: "Students" },
  { icon: Users, value: "1,800+", label: "Faculty" },
  { icon: BookOpen, value: "200+", label: "Programs" },
  { icon: Award, value: "Top 50", label: "National Ranking" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="University campus at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-fade-up">
            Applications Open for Sem II
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Shape Your Future at {" "}
            <span className="text-gradient-gold">Liberia Christian</span>{" "}
            College
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up stagger-2">
            Liberia Christian College is committed to academic excellence, Christian values, and practical skills that prepare students to lead, serve, and innovate in a changing world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button variant="gold" size="lg" className="group">
              Apply Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-secondary" size="lg">
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 animate-fade-up stagger-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 lg:p-6 border border-primary-foreground/20"
            >
              <stat.icon className="h-6 w-6 text-accent mb-3" />
              <div className="text-2xl lg:text-3xl font-heading font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
