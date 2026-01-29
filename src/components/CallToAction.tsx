import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, CheckCircle } from "lucide-react";
import { cta } from "@/data/cta";

export function CallToActionSection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary">
      {/* Simplified background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge - Simplified */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <Calendar className="h-3.5 w-3.5 text-white" />
            <span className="font-medium text-white text-sm">Admissions Open</span>
          </div>

          {/* Headline - Reduced size */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">
            Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              Journey Today
            </span>
          </h2>

          {/* Subheadline - More concise */}
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join Liberia's premier institution for affordable, accredited education.
          </p>

          {/* Key Benefits - Compact */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm font-medium">Accredited</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="h-4 w-4 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-xs font-bold">$</span>
              </div>
              <span className="text-white text-sm font-medium">Affordable</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-white text-sm font-medium">Flexible</span>
            </div>
          </div>

          {/* CTAs - More compact */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-base font-semibold rounded-xl group/apply shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover/apply:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Admissions
            </Button>
          </div>

          {/* Simplified deadline notice */}
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="h-5 w-5 text-amber-300" />
              <div className="text-center">
                <div className="text-white font-semibold">Final Deadline</div>
                <div className="text-white/80 text-sm">March 15, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}