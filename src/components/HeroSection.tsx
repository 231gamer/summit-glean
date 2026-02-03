import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Users, BookOpen, CheckCircle, MapPin, Clock } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const stats = [
  { 
    icon: GraduationCap, 
    value: "25,000+", 
    label: "Graduates Trained"
  },
  { 
    icon: BookOpen, 
    value: "200+", 
    label: "Accredited Programs"
  },
  { 
    icon: Users, 
    value: "90%", 
    label: "Employment Rate"
  }
];

export function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center pt-20 md:pt-24 pb-12 overflow-hidden">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCampus}
          alt="Liberia Christian College campus"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Urgency Badge - Simplified */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 mt-6 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm border border-amber-300/30">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="font-medium text-amber-100 text-sm">Semester II Admissions Open</span>
          </div>

          {/* Headline - Reduced size */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6">
            Quality Education
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mt-1">
              Within Your Reach
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Liberia's premier institution for <span className="font-semibold text-amber-300">affordable excellence</span>, 
            combining academic rigor with Christian values.
          </p>

          {/* Key Benefits - Quick highlights */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
              <CheckCircle className="h-3.5 w-3.5 text-green-400" />
              <span className="text-sm text-white">NCHE Accredited</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-sm text-white">Multiple Campuses</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
              <div className="h-3.5 w-3.5 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-xs font-bold">$</span>
              </div>
              <span className="text-sm text-white">Affordable Tuition</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-7 py-5 text-base font-semibold rounded-xl group/apply shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Start Your Application
              <ArrowRight className="h-5 w-5 ml-2 group-hover/apply:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-7 py-5 text-base font-semibold rounded-xl transition-all duration-300"
            >
              Explore Programs
            </Button>
          </div>

          {/* Stats Grid - 3 items */}
          <div className="grid grid-cols-3 gap-3 max-w-2xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-amber-300/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-white/80">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}