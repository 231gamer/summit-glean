import { useState, useCallback, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  BookOpen,
  Monitor,
  Microscope,
  Search,
  ChevronRight,
  ChevronLeft,
  Users,
  DollarSign,
  Briefcase,
  Award,
  Quote,
  Sparkles,
  Building,
  Heart,
  Lightbulb,
  MapPin,
  Clock,
  Calendar,
  User,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Filter,
  X,
  ChevronDown,
  Star,
  TrendingUp,
  Bookmark,
  Share2,
  Eye,
  Download,
  ArrowRight,
  Menu,
} from "lucide-react";

// ==================== TYPES & INTERFACES ====================
interface Program {
  id: number;
  title: string;
  degree: string;
  school: string;
  description: string;
  featured: boolean;
  image: string;
  duration?: string;
  format?: "Full-time" | "Part-time" | "Online";
  applicationDeadline?: string;
  tuition?: string;
  enrollmentCount?: number;
}

interface School {
  name: string;
  dean: string;
  deanImage?: string;
  description: string;
  programs: string[];
  type: "both" | "undergraduate" | "graduate";
  established?: number;
  location?: string;
  website?: string;
  contactEmail?: string;
  facultyCount?: number;
  researchCenters?: string[];
}

interface Statistic {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  description?: string;
}

interface FacultyMember {
  name: string;
  title: string;
  department: string;
  image: string;
  researchInterests: string[];
  email: string;
}

// ==================== DATA (Would move to separate files) ====================
const programCategories = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    description: "Bachelor's degrees & foundational programs",
    badge: "65+ programs",
    href: "/programs?level=undergraduate",
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Graduate",
    description: "Master's, Doctoral & advanced studies",
    badge: "45+ programs",
    href: "/programs?level=graduate",
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Monitor,
    title: "Online Learning",
    description: "Flexible online & hybrid options",
    badge: "30+ programs",
    href: "/programs?format=online",
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Microscope,
    title: "Research",
    description: "Cutting-edge research opportunities",
    badge: "$45M funding",
    href: "/research",
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "Executive education & certificates",
    badge: "Industry-focused",
    href: "/programs?type=professional",
    color: "bg-red-50 border-red-100",
    iconColor: "text-red-600",
  },
  {
    icon: Globe,
    title: "International",
    description: "Study abroad & global programs",
    badge: "25+ countries",
    href: "/international",
    color: "bg-cyan-50 border-cyan-100",
    iconColor: "text-cyan-600",
  },
];

const featuredPrograms: Program[] = [
  {
    id: 1,
    title: "Computer Science",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description: "Develop expertise in algorithms, AI, and software engineering with hands-on projects.",
    featured: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 15, 2024",
    tuition: "$45,000/year",
    enrollmentCount: 320,
  },
  {
    id: 2,
    title: "Business Administration",
    degree: "Master of Business Administration",
    school: "Business School",
    description: "Transform your career with our globally recognized MBA program.",
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
    duration: "2 years",
    format: "Full-time",
    applicationDeadline: "Mar 1, 2024",
    tuition: "$65,000/year",
    enrollmentCount: 180,
  },
  {
    id: 3,
    title: "Biomedical Engineering",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description: "Bridge biology and engineering to create innovative healthcare solutions.",
    featured: false,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 1, 2024",
    tuition: "$48,000/year",
    enrollmentCount: 150,
  },
  {
    id: 4,
    title: "Psychology",
    degree: "Bachelor of Arts",
    school: "College of Arts & Sciences",
    description: "Understand human behavior and prepare for careers in mental health.",
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Jan 31, 2024",
    tuition: "$42,000/year",
    enrollmentCount: 280,
  },
  {
    id: 5,
    title: "Data Science",
    degree: "Master of Science",
    school: "School of Computing",
    description: "Master the art of extracting insights from complex data sets.",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    duration: "1.5 years",
    format: "Full-time",
    applicationDeadline: "Dec 15, 2023",
    tuition: "$52,000/year",
    enrollmentCount: 120,
  },
  {
    id: 6,
    title: "Environmental Studies",
    degree: "Bachelor of Science",
    school: "College of Natural Sciences",
    description: "Address global environmental challenges through interdisciplinary research.",
    featured: false,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
    duration: "4 years",
    format: "Full-time",
    applicationDeadline: "Feb 15, 2024",
    tuition: "$44,000/year",
    enrollmentCount: 90,
  },
];

const statistics: Statistic[] = [
  { 
    label: "Programs Offered", 
    value: "145+", 
    icon: GraduationCap,
    description: "Across 8 schools & colleges" 
  },
  { 
    label: "Student-Faculty Ratio", 
    value: "10:1", 
    icon: Users,
    description: "Personalized attention" 
  },
  { 
    label: "Research Funding", 
    value: "$68M", 
    icon: DollarSign,
    description: "Annual research expenditure" 
  },
  { 
    label: "Employment Rate", 
    value: "96%", 
    icon: Briefcase,
    description: "Within 6 months of graduation" 
  },
  { 
    label: "International Students", 
    value: "25%", 
    icon: Globe,
    description: "From 70+ countries" 
  },
  { 
    label: "Campus Size", 
    value: "250 acres", 
    icon: MapPin,
    description: "State-of-the-art facilities" 
  },
];

const schools: School[] = [
  {
    name: "School of Engineering",
    dean: "Dr. Sarah Mitchell",
    deanImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
    description: "Leading innovation in technology, bioengineering, and sustainable design with world-class research facilities.",
    programs: ["Computer Science", "Mechanical Engineering", "Biomedical Engineering", "Civil Engineering", "Electrical Engineering", "Chemical Engineering"],
    type: "both",
    established: 1955,
    location: "Engineering Quad",
    website: "engineering.university.edu",
    contactEmail: "engineering@university.edu",
    facultyCount: 145,
    researchCenters: ["AI Research Center", "Sustainable Energy Lab", "Biotech Innovation Hub"],
  },
  {
    name: "Business School",
    dean: "Dr. Michael Chen",
    deanImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    description: "Developing tomorrow's business leaders with a global perspective through experiential learning.",
    programs: ["Business Administration", "Finance", "Marketing", "Entrepreneurship", "Supply Chain Management", "Data Analytics"],
    type: "both",
    established: 1972,
    location: "Business District",
    website: "business.university.edu",
    contactEmail: "business@university.edu",
    facultyCount: 89,
    researchCenters: ["Center for Entrepreneurship", "Financial Markets Lab", "Leadership Institute"],
  },
  {
    name: "College of Arts & Sciences",
    dean: "Dr. Emily Rodriguez",
    deanImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    description: "Exploring the humanities, social sciences, and natural world through interdisciplinary studies.",
    programs: ["Psychology", "Biology", "English", "History", "Chemistry", "Political Science", "Mathematics", "Physics"],
    type: "undergraduate",
    established: 1890,
    location: "Main Quad",
    website: "artsci.university.edu",
    contactEmail: "artsci@university.edu",
    facultyCount: 210,
    researchCenters: ["Humanities Center", "Social Science Research Lab", "Environmental Studies Institute"],
  },
  {
    name: "School of Medicine",
    dean: "Dr. James Wilson",
    deanImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    description: "Training the next generation of healthcare professionals through innovative medical education.",
    programs: ["Medicine", "Nursing", "Public Health", "Pharmacology", "Physical Therapy", "Medical Research"],
    type: "graduate",
    established: 1925,
    location: "Medical Campus",
    website: "medicine.university.edu",
    contactEmail: "medicine@university.edu",
    facultyCount: 320,
    researchCenters: ["Cancer Research Center", "Neuroscience Institute", "Public Health Lab"],
  },
  {
    name: "School of Law",
    dean: "Prof. Amanda Foster",
    deanImage: "https://images.unsplash.com/photo-1551836026-d5c2c0b4d4a1?w=100&h=100&fit=crop&crop=face",
    description: "Preparing advocates for justice and legal excellence through rigorous academic programs.",
    programs: ["Juris Doctor", "Legal Studies", "International Law", "Environmental Law", "Business Law"],
    type: "graduate",
    established: 1908,
    location: "Law Quad",
    website: "law.university.edu",
    contactEmail: "law@university.edu",
    facultyCount: 75,
    researchCenters: ["Center for Justice Reform", "International Law Institute", "Legal Technology Lab"],
  },
  {
    name: "School of Design & Arts",
    dean: "Prof. Robert Chen",
    deanImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    description: "Fostering creativity and innovation in visual, performing, and digital arts.",
    programs: ["Fine Arts", "Graphic Design", "Architecture", "Music", "Film Studies", "Digital Media"],
    type: "both",
    established: 1985,
    location: "Arts District",
    website: "design.university.edu",
    contactEmail: "design@university.edu",
    facultyCount: 68,
    researchCenters: ["Digital Arts Lab", "Urban Design Center", "Creative Entrepreneurship Hub"],
  },
];

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Alexandra Chen",
    title: "Professor of Computer Science",
    department: "School of Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    email: "alexandra.chen@university.edu",
  },
  {
    name: "Prof. Marcus Johnson",
    title: "Dean of Research",
    department: "College of Arts & Sciences",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    researchInterests: ["Cognitive Psychology", "Behavioral Economics", "Research Methodology"],
    email: "marcus.johnson@university.edu",
  },
  {
    name: "Dr. Sarah Williams",
    title: "Associate Professor of Medicine",
    department: "School of Medicine",
    image: "https://images.unsplash.com/photo-1551836026-d5c2c0b4d4a1?w=100&h=100&fit=crop&crop=face",
    researchInterests: ["Neurology", "Medical Imaging", "Clinical Trials"],
    email: "sarah.williams@university.edu",
  },
];

const pathfinderQuestions = [
  {
    question: "What interests you most?",
    options: [
      { id: "tech", label: "Technology & Innovation", icon: Lightbulb, description: "Computers, engineering, AI" },
      { id: "health", label: "Healthcare & Science", icon: Heart, description: "Medicine, biology, research" },
      { id: "business", label: "Business & Leadership", icon: Briefcase, description: "Management, finance, entrepreneurship" },
      { id: "arts", label: "Arts & Humanities", icon: Sparkles, description: "Design, literature, social sciences" },
    ],
  },
  {
    question: "What's your preferred learning style?",
    options: [
      { id: "hands-on", label: "Hands-on Labs", description: "Practical, experimental learning" },
      { id: "research", label: "Research Papers", description: "Theoretical, academic focus" },
      { id: "group", label: "Group Projects", description: "Collaborative, team-based" },
      { id: "online", label: "Online Modules", description: "Flexible, self-paced" },
    ],
  },
  {
    question: "Career goal timeframe?",
    options: [
      { id: "immediate", label: "Immediate employment", description: "Ready-to-work skills" },
      { id: "advanced", label: "Advanced degree", description: "Graduate school preparation" },
      { id: "research-career", label: "Research career", description: "Academic or industrial research" },
      { id: "entrepreneur", label: "Entrepreneurship", description: "Start your own venture" },
    ],
  },
];

const pathfinderResults: Record<string, { title: string; degree: string; match: number; description: string }[]> = {
  tech: [
    { title: "Computer Science", degree: "B.S. / M.S.", match: 95, description: "AI, Software Engineering, Cybersecurity" },
    { title: "Data Science", degree: "M.S.", match: 88, description: "Big Data Analytics, Machine Learning" },
    { title: "Information Systems", degree: "B.S.", match: 82, description: "Business Technology, IT Management" },
  ],
  health: [
    { title: "Biomedical Engineering", degree: "B.S.", match: 92, description: "Medical Devices, Healthcare Technology" },
    { title: "Nursing", degree: "B.S.N.", match: 89, description: "Clinical Practice, Healthcare Leadership" },
    { title: "Public Health", degree: "M.P.H.", match: 85, description: "Epidemiology, Health Policy" },
  ],
  business: [
    { title: "Business Administration", degree: "MBA", match: 96, description: "Leadership, Strategic Management" },
    { title: "Finance", degree: "B.S.", match: 88, description: "Investment Banking, Financial Analysis" },
    { title: "Marketing", degree: "B.S.", match: 84, description: "Digital Marketing, Brand Strategy" },
  ],
  arts: [
    { title: "English", degree: "B.A.", match: 90, description: "Literature, Writing, Critical Analysis" },
    { title: "Psychology", degree: "B.A.", match: 87, description: "Human Behavior, Mental Health" },
    { title: "History", degree: "B.A.", match: 83, description: "Historical Analysis, Cultural Studies" },
  ],
};

const faqs = [
  {
    question: "How do I choose the right program?",
    answer: "Use our Pathfinder tool above or speak with an academic advisor. Consider your career goals, learning preferences, and available time commitment. Our admissions team is also available for personalized guidance.",
  },
  {
    question: "What are the admission requirements?",
    answer: "Requirements vary by program. Generally, undergraduate programs require high school transcripts, standardized test scores, and essays. Graduate programs may require previous degree transcripts, GRE/GMAT scores, and letters of recommendation.",
  },
  {
    question: "Is financial aid available?",
    answer: "Yes! We offer various forms of financial aid including scholarships, grants, work-study programs, and loans. Over 70% of our students receive some form of financial assistance. Visit our Financial Aid office for more information.",
  },
  {
    question: "Can I visit campus before applying?",
    answer: "Absolutely! We offer daily campus tours, open houses, and virtual visit options. Schedule your visit through our admissions page to explore our facilities and meet current students and faculty.",
  },
  {
    question: "Are there online program options?",
    answer: "Yes, we offer fully online and hybrid programs across multiple disciplines. These programs maintain the same academic rigor and faculty quality as our on-campus offerings while providing flexibility for working professionals.",
  },
];

const testimonials = [
  {
    quote: "The interdisciplinary approach to learning here prepared me for real-world challenges in ways I never expected. The faculty mentorship was invaluable.",
    name: "Alexandra Chen",
    program: "Computer Science, Class of 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    currentRole: "Software Engineer at TechCorp",
  },
  {
    quote: "The research opportunities and faculty mentorship transformed my career trajectory completely. The hands-on projects were particularly valuable.",
    name: "Marcus Johnson",
    program: "Biomedical Engineering, Class of 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    currentRole: "Research Scientist at BioMed Labs",
  },
];

// ==================== CUSTOM HOOKS ====================
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// ==================== MAIN COMPONENT ====================
export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [schoolFilter, setSchoolFilter] = useState<"all" | "undergraduate" | "graduate">("all");
  const [pathfinderStep, setPathfinderStep] = useState(0);
  const [pathfinderAnswers, setPathfinderAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchResults, setSearchResults] = useState<Program[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const visiblePrograms = 3;
  const maxIndex = featuredPrograms.length - visiblePrograms;

  // Filter schools based on selected filter
  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      if (schoolFilter === "all") return true;
      return school.type === "both" || school.type === schoolFilter;
    });
  }, [schoolFilter]);

  // Filter featured programs for carousel
  const visibleFeaturedPrograms = useMemo(() => {
    return featuredPrograms.slice(carouselIndex, carouselIndex + visiblePrograms);
  }, [carouselIndex]);

  // Handle search functionality
  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      setIsSearching(true);
      // Simulate API call
      const results = featuredPrograms.filter(program =>
        program.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        program.school.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  const handlePathfinderSelect = (optionId: string) => {
    const newAnswers = [...pathfinderAnswers];
    newAnswers[pathfinderStep] = optionId;
    setPathfinderAnswers(newAnswers);

    if (pathfinderStep < pathfinderQuestions.length - 1) {
      setPathfinderStep(pathfinderStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetPathfinder = () => {
    setPathfinderStep(0);
    setPathfinderAnswers([]);
    setShowResults(false);
  };

  const getRecommendations = () => {
    const interest = pathfinderAnswers[0] || "tech";
    return pathfinderResults[interest] || pathfinderResults.tech;
  };

  const handleNextCarousel = () => {
    setCarouselIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handlePrevCarousel = () => {
    setCarouselIndex(prev => Math.max(0, prev - 1));
  };

  const handleSchoolSelect = (school: School) => {
    setSelectedSchool(school);
    // Scroll to school details
    document.getElementById('school-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section - Enhanced */}
  
      <section className="relative pt-32 pb-28 md:pt-40 md:pb-32 bg-gradient-to-br from-primary/90 via-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container relative z-10">
          {/* ... rest of the hero section content ... */}
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-2xl mx-auto animate-fade-up stagger-2">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                <Input
                  type="text"
                  placeholder="Search programs, majors, departments, or faculty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-16 text-lg bg-white/95 backdrop-blur-sm border-2 border-white/20 shadow-2xl focus:border-accent focus:ring-4 ring-accent/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              {debouncedSearchQuery && (
                <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50">
                  {isSearching ? (
                    <div className="p-6 text-center">
                      <div className="animate-pulse text-muted-foreground">Searching...</div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-border bg-muted/50">
                        <span className="font-semibold text-foreground">
                          {searchResults.length} results for "{debouncedSearchQuery}"
                        </span>
                      </div>
                      {searchResults.slice(0, 5).map((program) => (
                        <div
                          key={program.id}
                          className="px-4 py-3 hover:bg-primary/5 cursor-pointer border-b border-border last:border-0 transition-colors"
                          onClick={() => {
                            // Navigate to program page
                            console.log('Navigate to program:', program.id);
                            setSearchQuery("");
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <GraduationCap className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground">{program.title}</h4>
                              <p className="text-sm text-muted-foreground">{program.degree} • {program.school}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <p className="text-muted-foreground">No programs found. Try different keywords.</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-up stagger-3">
              {statistics.slice(0, 4).map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <stat.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm text-primary-foreground">
                    <span className="font-bold">{stat.value}</span> {stat.label}
                  </span>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Program Categories - Enhanced Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Find Your <span className="text-primary">Academic Path</span>
            </h2> 
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from diverse categories that match your interests and career aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl border-2 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="gold" className="group-hover:scale-105 transition-transform">
                      {category.badge}
                    </Badge>
                    
                    <Button variant="tertiary" size="sm" className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs - Enhanced Carousel */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <Badge variant="gold" className="mb-4">
                <TrendingUp className="h-3.5 w-3.5 mr-2" />
                Most Popular
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3">
                Featured <span className="text-primary">Programs</span>
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Discover our most sought-after academic programs with exceptional outcomes
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <Button
                variant="outline"
                size="lg"
                className="group"
              >
                <Bookmark className="h-4 w-4 mr-2" />
                Compare Programs
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevCarousel}
                  disabled={carouselIndex === 0}
                  className="disabled:opacity-40"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextCarousel}
                  disabled={carouselIndex >= maxIndex}
                  className="disabled:opacity-40"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex gap-8 transition-transform duration-500 ease-out">
                {featuredPrograms.map((program) => (
                  <Card
                    key={program.id}
                    featured={program.featured}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1.5rem)] overflow-hidden group hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Quick Actions Overlay */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="icon" variant="gold" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="gold" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge variant={program.featured ? "gold" : "purple"} className="mb-2">
                            {program.degree}
                          </Badge>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-1">
                            {program.title}
                          </h3>
                          <p className="text-sm text-primary font-medium">{program.school}</p>
                        </div>
                        
                        {program.featured && (
                          <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-2">
                        {program.description}
                      </p>
                      
                      {/* Program Details */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.applicationDeadline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.enrollmentCount} enrolled</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.tuition}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button variant="gold" className="flex-1 group">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === carouselIndex 
                    ? "w-8 bg-accent" 
                    : "w-2 bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Banner - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
              By The Numbers
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in these key statistics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {statistics.map((stat) => (
              <div 
                key={stat.label} 
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border p-6 text-center hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                {stat.description && (
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools & Colleges - Enhanced with Filters */}
      <section className="py-20 bg-background" id="schools">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-primary">Schools & Colleges</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover the diverse academic communities driving innovation and excellence
            </p>

            {/* Enhanced Filter Tabs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="inline-flex bg-card rounded-xl p-1.5 border border-border">
                {(["all", "undergraduate", "graduate"] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSchoolFilter(filter)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      schoolFilter === filter
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {filter === "all" ? "All Schools" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                className="sm:hidden"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Schools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchools.map((school) => (
              <Card 
                key={school.name} 
                className="group hover:shadow-card-hover transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handleSchoolSelect(school)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{school.name}</CardTitle>
                      <div className="flex items-center gap-3">
                        <img
                          src={school.deanImage}
                          alt={school.dean}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground">{school.dean}</p>
                          <p className="text-xs text-muted-foreground">Dean</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {school.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">Est. {school.established}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{school.facultyCount} Faculty</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{school.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {school.programs.slice(0, 4).map((program) => (
                      <Badge key={program} variant="purple" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                    {school.programs.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{school.programs.length - 4} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit
                    </Button>
                    <Button variant="gold" size="icon">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected School Details Modal */}
      {selectedSchool && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">{selectedSchool.name}</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedSchool(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Dean's Office</h4>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                    <img
                      src={selectedSchool.deanImage}
                      alt={selectedSchool.dean}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{selectedSchool.dean}</p>
                      <p className="text-sm text-muted-foreground">Dean</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedSchool.contactEmail}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Quick Facts</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Established</span>
                      <span className="font-medium">{selectedSchool.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Faculty</span>
                      <span className="font-medium">{selectedSchool.facultyCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{selectedSchool.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Website</span>
                      <a href={`https://${selectedSchool.website}`} className="text-primary hover:underline">
                        {selectedSchool.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Research Centers</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSchool.researchCenters?.map((center) => (
                    <Badge key={center} variant="outline" className="text-sm">
                      <Microscope className="h-3 w-3 mr-1" />
                      {center}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-3">Academic Programs</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedSchool.programs.map((program) => (
                    <div key={program} className="flex items-center gap-2 p-3 rounded-lg border hover:bg-primary/5 transition-colors">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{program}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button variant="gold" className="flex-1">
                  Visit School Website
                </Button>
                <Button variant="outline">
                  Contact Admissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Pathfinder Tool - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary/95 to-primary-dark">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="gold" className="mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Intelligent Matching
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Find Your Perfect Program Match
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Answer 3 simple questions and discover programs tailored to your goals
              </p>
            </div>

            <Card className="p-6 md:p-8 shadow-2xl border-0">
              {!showResults ? (
                <div>
                  {/* Enhanced Progress Indicator */}
                  <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {pathfinderStep + 1} of {pathfinderQuestions.length}
                      </span>
                      <span className="text-sm font-medium text-accent">
                        {Math.round((pathfinderStep / pathfinderQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent transition-all duration-500"
                        style={{ width: `${((pathfinderStep + 1) / pathfinderQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
                    {pathfinderQuestions[pathfinderStep].question}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {pathfinderQuestions[pathfinderStep].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handlePathfinderSelect(option.id)}
                        className={`p-6 rounded-xl border-2 text-left transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:scale-[1.02] ${
                          pathfinderAnswers[pathfinderStep] === option.id
                            ? "border-accent bg-accent/10 scale-[1.02]"
                            : "border-border"
                        }`}
                      >
                        {"icon" in option && option.icon && (
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <option.icon className="h-6 w-6 text-primary" />
                          </div>
                        )}
                        <div className="font-semibold text-foreground mb-2">{option.label}</div>
                        {"description" in option && option.description && (
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        )}
                      </button>
                    ))}
                  </div>

                  {pathfinderStep > 0 && (
                    <Button
                      variant="ghost"
                      onClick={() => setPathfinderStep(prev => prev - 1)}
                      className="mt-6"
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous Question
                    </Button>
                  )}
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Award className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      Perfect Matches Found!
                    </h3>
                    <p className="text-muted-foreground">
                      Based on your interests, here are our top recommendations
                    </p>
                  </div>

                  <div className="space-y-6 mb-8">
                    {getRecommendations().map((rec, i) => (
                      <div
                        key={rec.title}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-background rounded-xl border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4 mb-4 sm:mb-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary text-lg">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground text-lg mb-1">{rec.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{rec.degree} • {rec.description}</p>
                            <Badge variant="gold" className="group-hover:scale-105 transition-transform">
                              {rec.match}% Match
                            </Badge>
                          </div>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <Button variant="gold" size="sm" className="flex-1 sm:flex-none">
                            Learn More
                          </Button>
                          <Button variant="outline" size="icon">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" onClick={resetPathfinder} className="flex-1">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Start Over
                    </Button>
                    <Button variant="gold" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download Recommendations
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Faculty</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from distinguished scholars and industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={faculty.name} className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                    />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{faculty.name}</h4>
                      <p className="text-sm text-primary font-medium">{faculty.department}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">{faculty.title}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-foreground mb-3">Research Interests</div>
                    <div className="flex flex-wrap gap-2">
                      {faculty.researchInterests.map((interest) => (
                        <Badge key={interest} variant="purple" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Professor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="gold" size="lg">
              <User className="h-5 w-5 mr-2" />
              View All Faculty
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <Badge variant="outline" className="mb-6">
              <Quote className="h-3.5 w-3.5 mr-2" />
              From Our Alumni
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-8 hover:shadow-card-hover transition-all duration-300">
                <Quote className="h-12 w-12 text-accent/30 mb-6" />
                <p className="text-lg text-foreground mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                      <div className="text-xs text-primary font-medium mt-1">{testimonial.currentRole}</div>
                    </div>
                  </div>
                  <GraduationCap className="h-8 w-8 text-primary/30" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion - Enhanced */}
      <section className="py-20 bg-card">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our academic programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">{i + 1}</span>
                    </div>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Call Admissions
              </Button>
              <Button variant="gold">
                <Mail className="h-4 w-4 mr-2" />
                Email Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Begin Your <span className="text-accent">Journey</span>?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have transformed their futures at our university
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="gold" size="lg" className="group">
              Apply Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-secondary" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Visit
            </Button>
            <Button variant="hero-secondary" size="lg">
              <Download className="h-5 w-5 mr-2" />
              Download Brochure
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-primary-foreground/80">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">$85K</div>
              <div className="text-sm text-primary-foreground/80">Avg Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">70+</div>
              <div className="text-sm text-primary-foreground/80">Countries Represented</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">150+</div>
              <div className="text-sm text-primary-foreground/80">Student Organizations</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}