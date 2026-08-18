import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import { CampusSection } from "@/components/CampusSection"; 
import { NewsEventsSection } from "@/components/NewsEventsSection";
import {TestimonialsSection} from "@/components/Testimonials";
import {CallToActionSection} from "@/components/CallToAction";
// import { CTASection } from "@/components/CTASection"; 
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Liberia Christian College"
        description="Liberia Christian College (LCC) is a Christian institution of higher learning in Monrovia, Liberia, preparing men and women for ministry and professional discipline."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <AdmissionsSection />
        <CampusSection />
        <NewsEventsSection />
        <TestimonialsSection />
        <CallToActionSection />
        {/* <CTASection />  */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
