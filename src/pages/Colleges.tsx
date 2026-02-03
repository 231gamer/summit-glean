import { useState, useCallback, useMemo, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  AlertCircle,
} from "lucide-react";

// ==================== DATA & TYPES ====================
import {
  programCategories,
  featuredPrograms,
  schools,
  statistics,
  facultyMembers,
  pathfinderQuestions,
  pathfinderResults,
  faqs,
  testimonials,
  type Program,
  type School,
} from "@/data/colleges";

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
  const [showComingSoon, setShowComingSoon] = useState(false);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const visiblePrograms = 3;

  // Handle coming soon category click
  const handleCategoryClick = (category: typeof programCategories[0]) => {
    if (category.comingSoon) {
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 4000);
    }
  };

  // Filter schools based on selected filter
  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      if (schoolFilter === "all") return true;
      return school.type === "both" || school.type === schoolFilter;
    });
  }, [schoolFilter]);

  // Filter featured programs for carousel
  const allFeaturedPrograms = useMemo(() => {
    return featuredPrograms.filter(program => program.featured);
  }, []);

  const maxIndex = Math.max(0, allFeaturedPrograms.length - visiblePrograms);

  const visibleFeaturedPrograms = useMemo(() => {
    return allFeaturedPrograms.slice(carouselIndex, carouselIndex + visiblePrograms);
  }, [carouselIndex, allFeaturedPrograms]);

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
                onClick={() => handleCategoryClick(category)}
                className={`group relative overflow-hidden rounded-2xl border-2 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 animate-fade-up ${
                  category.comingSoon
                    ? "border-muted cursor-not-allowed opacity-75"
                    : "hover:border-primary/50 hover:shadow-card-hover cursor-pointer"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 ${!category.comingSoon && "group-hover:opacity-100"} transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 ${!category.comingSoon && "group-hover:scale-110"} transition-transform duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant={category.comingSoon ? "secondary" : "gold"} className={`${!category.comingSoon && "group-hover:scale-105"} transition-transform`}>
                      {category.badge}
                    </Badge>
                    
                    {!category.comingSoon && (
                      <Button variant="tertiary" size="sm" className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        Explore
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                </div>
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
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Building className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      {/* REMOVED: Dean section - Only school name remains */}
                      <CardTitle className="text-xl mb-2">{school.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {school.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {/* CHANGED: Est. 1955 to Duration (3.5 years or 4 years) */}
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">Duration: {school.duration || "4 years"}</span>
                    </div>

                    {/* CHANGED: Faculty count to Credit Hours */}
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">{school.creditHours || "120-144"} Credit Hours</span>
                    </div>

                    {/* CHANGED: Location to Liberian format */}
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground font-medium">
                        {school.location === "Engineering Quad" ? "5th Street, Beachside, Mon-Lib" :
                         school.location === "Business District" ? "Dixville, Liberia" :
                         school.location === "Main Quad" ? "5th Street, Beachside, Mon-Lib" :
                         school.location === "Medical Campus" ? "Dixville, Liberia" :
                         school.location === "Law Quad" ? "5th Street, Beachside, Mon-Lib" :
                         school.location === "Arts District" ? "Dixville, Liberia" :
                         school.location}
                      </span>
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
                    {/* CHANGED: "Visit" to "View Details" */}
                    <Button variant="purple" className="flex-1 group">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selected School Details Modal - Updated for Liberian Context */}
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
              {/* Accreditation & Program Information */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Accreditation & Program Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Accredited by</span>
                    <span className="font-medium text-right">National Commission on Higher Education (NCHE), Liberia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Degree Awarded</span>
                    <span className="font-medium text-right">
                      {selectedSchool.name.includes("Engineering") ? "Bachelor of Engineering (BEng)" :
                       selectedSchool.name.includes("Medicine") ? "Doctor of Medicine (MD)" :
                       selectedSchool.name.includes("Law") ? "Juris Doctor (JD)" :
                       "Bachelor of Science (BSc)"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Program Duration</span>
                    <span className="font-medium">{selectedSchool.duration || "3.5 – 4 Years"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-right">
                      {selectedSchool.location === "Engineering Quad" ? "5th Street, Beachside, Mon-Lib" :
                       selectedSchool.location === "Business District" ? "Dixville, Liberia" :
                       selectedSchool.location === "Main Quad" ? "5th Street, Beachside, Mon-Lib" :
                       selectedSchool.location === "Medical Campus" ? "Dixville, Liberia" :
                       selectedSchool.location === "Law Quad" ? "5th Street, Beachside, Mon-Lib" :
                       selectedSchool.location === "Arts District" ? "Dixville, Liberia" :
                       selectedSchool.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Facilities & Practical Training */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Facilities & Practical Training</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSchool.name.includes("Engineering") ? (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <Microscope className="h-3 w-3 mr-1" />
                        Advanced Engineering Labs
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Building className="h-3 w-3 mr-1" />
                        ICT & Innovation Lab
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Industry Partnerships
                      </Badge>
                    </>
                  ) : selectedSchool.name.includes("Business") ? (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <Briefcase className="h-3 w-3 mr-1" />
                        Business Simulation Center
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Trading & Finance Lab
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Users className="h-3 w-3 mr-1" />
                        Entrepreneurship Hub
                      </Badge>
                    </>
                  ) : selectedSchool.name.includes("Medicine") ? (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <Heart className="h-3 w-3 mr-1" />
                        Clinical Simulation Center
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Microscope className="h-3 w-3 mr-1" />
                        Medical Research Labs
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Building className="h-3 w-3 mr-1" />
                        Teaching Hospital Facilities
                      </Badge>
                    </>
                  ) : selectedSchool.name.includes("Law") ? (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Moot Court Room
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Building className="h-3 w-3 mr-1" />
                        Legal Clinic
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Law Library
                      </Badge>
                    </>
                  ) : selectedSchool.name.includes("Design") ? (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Design Studios
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Building className="h-3 w-3 mr-1" />
                        Digital Media Labs
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Exhibition Spaces
                      </Badge>
                    </>
                  ) : (
                    <>
                      <Badge variant="outline" className="text-sm">
                        <Building className="h-3 w-3 mr-1" />
                        ICT & Innovation Lab
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <Microscope className="h-3 w-3 mr-1" />
                        Research Laboratories
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        <GraduationCap className="h-3 w-3 mr-1" />
                        Practical Training Facilities
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Academic Programs */}
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

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                {/* CHANGED: "Visit School Website" to "Apply Now" */}
                <Button variant="purple" className="flex-1 group">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* CHANGED: "Contact Admissions" to WhatsApp Button */}
                <Button
                  variant="outline"
                  className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300 hover:text-green-800"
                  onClick={() => {
                    // WhatsApp link for Liberia
                    const phoneNumber = "+231771234567";
                    const message = `Hello! I'm interested in learning more about ${selectedSchool.name} programs.`;
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  {/* WhatsApp icon */}
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  WhatsApp Admissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Coming Soon Alert */}
      {showComingSoon && (
        <div className="fixed top-6 right-6 z-50 max-w-sm animate-in fade-in slide-in-from-top">
          <Alert className="bg-primary text-primary-foreground border-primary">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Graduate programs are coming soon! We're excited to expand our offerings.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Featured Programs*/}
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
            
            {/* REMOVED: Compare Programs Button - Only navigation buttons remain */}
            <div className="flex items-center gap-4 mt-6 md:mt-0">
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
                {visibleFeaturedPrograms.map((program) => (
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
                      
                      {/* Quick Actions Overlay - Keep bookmark and share for user convenience */}
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
                      
                      {/* Program Details - MODIFIED: Only Duration and Starting Date for Liberian system */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground font-medium">{program.applicationDeadline}</span>
                        </div>
                        {/* REMOVED: Enrollment count and tuition fields */}
                      </div>
                      
                      {/* View Details Button - MODIFIED: Gold variant, removed eye icon */}
                      <Button variant="purple" className="w-full group">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
                          <Button variant="purple" size="sm" className="flex-1 sm:flex-none">
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
                    <Button variant="purple" className="flex-1">
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
            <Button variant="purple" size="lg">
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
              <Button variant="purple">
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
            <Button variant="purple" size="lg" className="group">
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
              <div className="text-2xl font-bold text-accent mb-1">97%</div>
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