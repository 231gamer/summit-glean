import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import { NewsEventsSection } from "@/components/NewsEventsSection";
// Campus life section hidden temporarily
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <AdmissionsSection />
        <NewsEventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
