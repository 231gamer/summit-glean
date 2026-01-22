import { useState } from "react";
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
} from "lucide-react";

const programCategories = [
  {
    icon: GraduationCap,
    title: "Undergraduate",
    description: "Bachelor's degrees",
    badge: "50+ programs",
    href: "/programs?level=undergraduate",
  },
  {
    icon: BookOpen,
    title: "Graduate",
    description: "Master's & Doctoral",
    badge: "35+ programs",
    href: "/programs?level=graduate",
  },
  {
    icon: Monitor,
    title: "Online Learning",
    description: "Flexible online options",
    badge: "Flexible",
    href: "/programs?format=online",
  },
  {
    icon: Microscope,
    title: "Research",
    description: "Cutting-edge research",
    badge: "$25M funding",
    href: "/research",
  },
];

const featuredPrograms = [
  {
    id: 1,
    title: "Computer Science",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description: "Develop expertise in algorithms, AI, and software engineering with hands-on projects.",
    featured: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Business Administration",
    degree: "Master of Business Administration",
    school: "Business School",
    description: "Transform your career with our globally recognized MBA program.",
    featured: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Biomedical Engineering",
    degree: "Bachelor of Science",
    school: "School of Engineering",
    description: "Bridge biology and engineering to create innovative healthcare solutions.",
    featured: false,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "Psychology",
    degree: "Bachelor of Arts",
    school: "College of Arts & Sciences",
    description: "Understand human behavior and prepare for careers in mental health.",
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    title: "Data Science",
    degree: "Master of Science",
    school: "School of Computing",
    description: "Master the art of extracting insights from complex data sets.",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    title: "Environmental Studies",
    degree: "Bachelor of Science",
    school: "College of Natural Sciences",
    description: "Address global environmental challenges through interdisciplinary research.",
    featured: false,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
  },
];

const statistics = [
  { label: "Programs Offered", value: "120+", icon: GraduationCap },
  { label: "Student-Faculty Ratio", value: "12:1", icon: Users },
  { label: "Research Funding", value: "$45M", icon: DollarSign },
  { label: "Employment Rate", value: "94%", icon: Briefcase },
];

const schools = [
  {
    name: "School of Engineering",
    dean: "Dr. Sarah Mitchell",
    description: "Leading innovation in technology, bioengineering, and sustainable design.",
    programs: ["Computer Science", "Mechanical Engineering", "Biomedical Engineering", "Civil Engineering"],
    type: "both",
  },
  {
    name: "Business School",
    dean: "Dr. Michael Chen",
    description: "Developing tomorrow's business leaders with a global perspective.",
    programs: ["Business Administration", "Finance", "Marketing", "Entrepreneurship"],
    type: "both",
  },
  {
    name: "College of Arts & Sciences",
    dean: "Dr. Emily Rodriguez",
    description: "Exploring the humanities, social sciences, and natural world.",
    programs: ["Psychology", "Biology", "English", "History", "Chemistry"],
    type: "undergraduate",
  },
  {
    name: "School of Medicine",
    dean: "Dr. James Wilson",
    description: "Training the next generation of healthcare professionals.",
    programs: ["Medicine", "Nursing", "Public Health", "Pharmacology"],
    type: "graduate",
  },
  {
    name: "School of Law",
    dean: "Prof. Amanda Foster",
    description: "Preparing advocates for justice and legal excellence.",
    programs: ["Juris Doctor", "Legal Studies", "International Law"],
    type: "graduate",
  },
];

const pathfinderQuestions = [
  {
    question: "What interests you most?",
    options: [
      { id: "tech", label: "Technology & Innovation", icon: Lightbulb },
      { id: "health", label: "Healthcare & Science", icon: Heart },
      { id: "business", label: "Business & Leadership", icon: Briefcase },
      { id: "arts", label: "Arts & Humanities", icon: Sparkles },
    ],
  },
  {
    question: "What's your preferred learning style?",
    options: [
      { id: "hands-on", label: "Hands-on Labs" },
      { id: "research", label: "Research Papers" },
      { id: "group", label: "Group Projects" },
      { id: "online", label: "Online Modules" },
    ],
  },
  {
    question: "Career goal timeframe?",
    options: [
      { id: "immediate", label: "Immediate employment" },
      { id: "advanced", label: "Advanced degree" },
      { id: "research-career", label: "Research career" },
      { id: "entrepreneur", label: "Entrepreneurship" },
    ],
  },
];

const pathfinderResults: Record<string, { title: string; degree: string; match: number }[]> = {
  tech: [
    { title: "Computer Science", degree: "B.S.", match: 95 },
    { title: "Data Science", degree: "M.S.", match: 88 },
    { title: "Information Systems", degree: "B.S.", match: 82 },
  ],
  health: [
    { title: "Biomedical Engineering", degree: "B.S.", match: 92 },
    { title: "Nursing", degree: "B.S.N.", match: 89 },
    { title: "Public Health", degree: "M.P.H.", match: 85 },
  ],
  business: [
    { title: "Business Administration", degree: "MBA", match: 96 },
    { title: "Finance", degree: "B.S.", match: 88 },
    { title: "Marketing", degree: "B.S.", match: 84 },
  ],
  arts: [
    { title: "English", degree: "B.A.", match: 90 },
    { title: "Psychology", degree: "B.A.", match: 87 },
    { title: "History", degree: "B.A.", match: 83 },
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
    quote: "The interdisciplinary approach to learning here prepared me for real-world challenges in ways I never expected.",
    name: "Alexandra Chen",
    program: "Computer Science, Class of 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The faculty mentorship and research opportunities transformed my career trajectory completely.",
    name: "Marcus Johnson",
    program: "Biomedical Engineering, Class of 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Academics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [schoolFilter, setSchoolFilter] = useState<"all" | "undergraduate" | "graduate">("all");
  const [pathfinderStep, setPathfinderStep] = useState(0);
  const [pathfinderAnswers, setPathfinderAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const visiblePrograms = 3;
  const maxIndex = featuredPrograms.length - visiblePrograms;

  const filteredSchools = schools.filter((school) => {
    if (schoolFilter === "all") return true;
    return school.type === "both" || school.type === schoolFilter;
  });

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up">
              Shape Your Future Through Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up stagger-1">
              Discover over 120 programs designed to inspire innovation, foster critical thinking, 
              and prepare you for a lifetime of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-2">
              <Button variant="gold" size="lg">
                Browse All Programs
              </Button>
              <Button variant="hero-secondary" size="lg">
                Virtual Tour
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mt-10 max-w-xl mx-auto animate-fade-up stagger-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search programs, majors, or departments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card border-0 shadow-elegant"
                />
              </div>
              {/* Backend placeholder for autocomplete */}
              {/* Autocomplete suggestions would be fetched from /api/programs/search */}
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your path among our diverse academic offerings
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {programCategories.map((category) => (
              <Card
                key={category.title}
                className="group cursor-pointer card-hover border-2 hover:border-accent/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <Badge variant="gold" className="mb-4">
                    {category.badge}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Carousel */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Featured Programs
              </h2>
              <p className="text-muted-foreground">
                Our most popular and in-demand academic programs
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                disabled={carouselIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCarouselIndex(Math.min(maxIndex, carouselIndex + 1))}
                disabled={carouselIndex >= maxIndex}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${carouselIndex * (100 / visiblePrograms)}%)` }}
            >
              {featuredPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] overflow-hidden card-hover group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={program.featured ? "gold" : "purple"}>
                        {program.degree}
                      </Badge>
                      {program.featured && (
                        <Badge variant="outline" className="border-accent text-accent">
                          <Award className="h-3 w-3 mr-1" />
                          In Demand
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {program.description}
                    </p>
                    <Button variant="gold" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCarouselIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === carouselIndex ? "bg-accent w-6" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Backend placeholder comment */}
          {/* Featured programs would be managed via CMS at /api/programs/featured */}
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-12 bg-accent-light">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/30 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-accent-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools & Colleges */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Schools & Colleges
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover the diverse academic communities that make up our university
            </p>

            {/* Filter Tabs */}
            <div className="inline-flex bg-card rounded-xl p-1.5 border border-border">
              {(["all", "undergraduate", "graduate"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSchoolFilter(filter)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    schoolFilter === filter
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <Card key={school.name} className="card-hover">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{school.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{school.dean}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{school.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {school.programs.slice(0, 3).map((program) => (
                      <Badge key={program} variant="purple">
                        {program}
                      </Badge>
                    ))}
                    {school.programs.length > 3 && (
                      <Badge variant="outline">+{school.programs.length - 3} more</Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full">
                    Visit School Page
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Backend placeholder */}
          {/* Schools data would come from /api/schools */}
        </div>
      </section>

      {/* Pathfinder Tool */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="gold" className="mb-4">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Program Pathfinder
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Find Your Perfect Program
              </h2>
              <p className="text-primary-foreground/80">
                Answer a few questions and we'll recommend programs tailored to you
              </p>
            </div>

            <Card className="p-6 md:p-8">
              {!showResults ? (
                <div>
                  {/* Progress indicator */}
                  <div className="flex justify-center gap-2 mb-8">
                    {pathfinderQuestions.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all ${
                          i < pathfinderStep
                            ? "bg-accent"
                            : i === pathfinderStep
                            ? "bg-primary"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground text-center mb-6">
                    {pathfinderQuestions[pathfinderStep].question}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {pathfinderQuestions[pathfinderStep].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handlePathfinderSelect(option.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all hover:border-accent hover:bg-accent/5 ${
                          pathfinderAnswers[pathfinderStep] === option.id
                            ? "border-accent bg-accent/10"
                            : "border-border"
                        }`}
                      >
                        {"icon" in option && option.icon && (
                          <option.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        )}
                        <span className="font-medium text-foreground">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <Award className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      Based on your interests, we recommend:
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    {getRecommendations().map((rec, i) => (
                      <div
                        key={rec.title}
                        className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{rec.title}</h4>
                            <p className="text-sm text-muted-foreground">{rec.degree}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="gold">{rec.match}% Match</Badge>
                          <Button variant="gold" size="sm">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" onClick={resetPathfinder} className="w-full">
                    Start Over
                  </Button>

                  {/* Backend placeholder */}
                  {/* This would connect to recommendation engine at /api/pathfinder */}
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <Quote className="h-10 w-10 text-accent/50 mb-4" />
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to frequently asked questions about our academic programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Apply now or schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg">
              Apply Now
            </Button>
            <Button variant="hero-secondary" size="lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}