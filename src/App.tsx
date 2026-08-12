import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollProgress } from "@/components/animations";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Colleges from "./pages/Colleges";
import ProgramDetails from "./pages/ProgramDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Admissions from "./pages/Admissions";
import AdmissionRequirements from "./pages/AdmissionRequirements";
import Tuition from "./pages/Tuition";
import Scholarships from "./pages/Scholarships";
import HowToApply from "./pages/HowToApply";
import Leadership from "./pages/Leadership";
import FacultyStaff from "./pages/FacultyStaff";
import Updates from "./pages/Updates";
import News from "./pages/News";
import Events from "./pages/Events";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollProgress />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/colleges" element={<Colleges />} />
          {/* <Route path="/academics" element={<Colleges />} />  */}
          <Route path="/programs/:slug" element={<ProgramDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/requirements" element={<AdmissionRequirements />} />
          <Route path="/admissions/tuition" element={<Tuition />} />
          <Route path="/admissions/scholarships" element={<Scholarships />} />
          <Route path="/admissions/how-to-apply" element={<HowToApply />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/faculty-staff" element={<FacultyStaff />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/news" element={<News />} />
          <Route path="/updates/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
