import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, TextareaField, SelectField } from "@/components/ui/form-field";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Clock,
  Calendar,
  DollarSign,
  Users,
  MapPin,
  BookOpen,
  GraduationCap,
  Award,
  Briefcase,
  CheckCircle2,
  Circle,
  FileText,
  Download,
  Plus,
  X,
  ChevronRight,
  Mail,
  Phone,
  Building,
} from "lucide-react";

// Mock program data
const programData = {
  slug: "computer-science",
  title: "Computer Science",
  degree: "Bachelor of Science",
  school: "School of Engineering",
  description: "Our Computer Science program prepares students for careers in software development, artificial intelligence, cybersecurity, and more. Through hands-on projects, research opportunities, and industry partnerships, you'll gain the skills needed to thrive in the ever-evolving tech landscape.",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop",
  featured: true,
  quickFacts: {
    duration: "4 years",
    credits: "120",
    format: "On-Campus / Hybrid",
    startTerms: ["Fall", "Spring"],
    tuition: "$12,500/semester",
    studentFacultyRatio: "15:1",
  },
  outcomes: {
    employmentRate: "96%",
    avgSalary: "$85,000",
    topEmployers: ["Google", "Microsoft", "Apple", "Meta", "Amazon"],
    gradSchoolRate: "28%",
  },
  curriculum: {
    year1: [
      { code: "CS101", name: "Introduction to Programming", credits: 3, type: "core" },
      { code: "CS102", name: "Data Structures", credits: 3, type: "core" },
      { code: "MATH201", name: "Calculus I", credits: 4, type: "core" },
      { code: "MATH202", name: "Discrete Mathematics", credits: 3, type: "core" },
    ],
    year2: [
      { code: "CS201", name: "Algorithms", credits: 3, type: "core" },
      { code: "CS210", name: "Computer Architecture", credits: 3, type: "core" },
      { code: "CS220", name: "Database Systems", credits: 3, type: "core" },
      { code: "MATH301", name: "Linear Algebra", credits: 3, type: "core" },
    ],
    year3: [
      { code: "CS301", name: "Operating Systems", credits: 3, type: "core" },
      { code: "CS320", name: "Software Engineering", credits: 3, type: "core" },
      { code: "CS350", name: "Artificial Intelligence", credits: 3, type: "elective" },
      { code: "CS360", name: "Web Development", credits: 3, type: "elective" },
    ],
    year4: [
      { code: "CS401", name: "Capstone Project", credits: 6, type: "capstone" },
      { code: "CS420", name: "Machine Learning", credits: 3, type: "elective" },
      { code: "CS430", name: "Cybersecurity", credits: 3, type: "elective" },
      { code: "CS440", name: "Cloud Computing", credits: 3, type: "elective" },
    ],
  },
  faculty: [
    {
      name: "Dr. Sarah Mitchell",
      title: "Department Chair, Professor",
      specialization: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. James Chen",
      title: "Associate Professor",
      specialization: "Machine Learning",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Assistant Professor",
      specialization: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
  ],
  requirements: [
    { id: "app", label: "Application Form", status: "required", link: "/apply" },
    { id: "transcripts", label: "High School Transcripts", status: "required" },
    { id: "sat", label: "SAT/ACT Scores", status: "recommended" },
    { id: "letters", label: "Letters of Recommendation (2)", status: "required" },
    { id: "essay", label: "Personal Statement (500-750 words)", status: "required" },
  ],
  deadlines: {
    priority: { date: "November 1, 2024", label: "Priority Deadline" },
    regular: { date: "January 15, 2025", label: "Regular Deadline" },
    final: { date: "March 1, 2025", label: "Final Deadline" },
  },
};

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "in", label: "India" },
  { value: "cn", label: "China" },
  { value: "other", label: "Other" },
];

export default function ProgramDetails() {
  const { slug } = useParams();
  const [selectedYear, setSelectedYear] = useState<"year1" | "year2" | "year3" | "year4">("year1");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showInquiryForm, setShowInquiryForm] = useState(true);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    startTerm: "fall",
    message: "",
    privacy: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Eligibility checker
  const [eligibilityData, setEligibilityData] = useState({
    gpa: 3.0,
    degree: "",
    country: "",
  });
  const [eligibilityChecked, setEligibilityChecked] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would go to /api/program-inquiry
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  const handleAddToCompare = () => {
    if (!compareList.includes(programData.slug)) {
      setCompareList([...compareList, programData.slug]);
    }
  };

  const checkEligibility = () => {
    setEligibilityChecked(true);
  };

  const curriculum = programData.curriculum[selectedYear];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "core":
        return "bg-primary";
      case "elective":
        return "bg-accent";
      case "capstone":
        return "bg-success";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${programData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary/80" />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/academics" className="hover:text-accent transition-colors">Academics</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary-foreground">{programData.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="gold">{programData.degree}</Badge>
              {programData.featured && (
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">
                  <Award className="h-3.5 w-3.5 mr-1" />
                  Featured Program
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              {programData.title}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-6">
              {programData.school}
            </p>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl">
              {programData.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg">
                Apply Now
              </Button>
              <Button variant="hero-secondary" size="lg" onClick={handleAddToCompare}>
                <Plus className="h-4 w-4 mr-2" />
                Add to Compare
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Program Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                        <div className="font-semibold">{programData.quickFacts.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Credits</div>
                        <div className="font-semibold">{programData.quickFacts.credits}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Format</div>
                        <div className="font-semibold">{programData.quickFacts.format}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Start Terms</div>
                        <div className="font-semibold">{programData.quickFacts.startTerms.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Tuition</div>
                        <div className="font-semibold text-accent-foreground">{programData.quickFacts.tuition}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Student-Faculty</div>
                        <div className="font-semibold">{programData.quickFacts.studentFacultyRatio}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Curriculum</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Year Selector */}
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {(["year1", "year2", "year3", "year4"] as const).map((year, i) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                          selectedYear === year
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border border-border text-foreground hover:bg-primary/5"
                        }`}
                      >
                        Year {i + 1}
                      </button>
                    ))}
                  </div>

                  {/* Course List */}
                  <div className="space-y-3">
                    {curriculum.map((course) => (
                      <div
                        key={course.code}
                        className="flex items-center justify-between p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-1.5 h-12 rounded-full ${getTypeColor(course.type)}`} />
                          <div>
                            <div className="font-mono text-sm text-primary font-semibold">
                              {course.code}
                            </div>
                            <div className="font-medium text-foreground">{course.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="gold">{course.credits} Credits</Badge>
                          <Badge variant="outline" className="capitalize">
                            {course.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground">Core</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-muted-foreground">Elective</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success" />
                      <span className="text-muted-foreground">Capstone</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Faculty Spotlight */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Faculty Spotlight</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {programData.faculty.map((faculty) => (
                      <div key={faculty.name} className="text-center">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                        />
                        <h4 className="font-semibold text-foreground">{faculty.name}</h4>
                        <p className="text-sm text-primary">{faculty.title}</p>
                        <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Career Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-4 bg-accent-light rounded-xl">
                      <Briefcase className="h-6 w-6 text-accent-foreground mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-accent-foreground">
                        {programData.outcomes.employmentRate}
                      </div>
                      <div className="text-sm text-accent-foreground/70">Employment Rate</div>
                    </div>
                    <div className="text-center p-4 bg-accent-light rounded-xl">
                      <DollarSign className="h-6 w-6 text-accent-foreground mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-accent-foreground">
                        {programData.outcomes.avgSalary}
                      </div>
                      <div className="text-sm text-accent-foreground/70">Avg. Starting Salary</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-primary">
                        {programData.outcomes.gradSchoolRate}
                      </div>
                      <div className="text-sm text-muted-foreground">Continue to Grad School</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-xl">
                      <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-heading font-bold text-primary">
                        Top 10
                      </div>
                      <div className="text-sm text-muted-foreground">National Ranking</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Top Employers</h4>
                    <div className="flex flex-wrap gap-2">
                      {programData.outcomes.topEmployers.map((employer) => (
                        <Badge key={employer} variant="purple">
                          {employer}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admission Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Admission Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Deadlines */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-accent-light rounded-xl border-2 border-accent">
                      <Calendar className="h-5 w-5 text-accent-foreground mb-2" />
                      <div className="text-sm text-accent-foreground/70">{programData.deadlines.priority.label}</div>
                      <div className="font-semibold text-accent-foreground">{programData.deadlines.priority.date}</div>
                    </div>
                    <div className="p-4 bg-background rounded-xl border border-border">
                      <Calendar className="h-5 w-5 text-primary mb-2" />
                      <div className="text-sm text-muted-foreground">{programData.deadlines.regular.label}</div>
                      <div className="font-semibold text-foreground">{programData.deadlines.regular.date}</div>
                    </div>
                    <div className="p-4 bg-background rounded-xl border border-border">
                      <Calendar className="h-5 w-5 text-primary mb-2" />
                      <div className="text-sm text-muted-foreground">{programData.deadlines.final.label}</div>
                      <div className="font-semibold text-foreground">{programData.deadlines.final.date}</div>
                    </div>
                  </div>

                  {/* Requirements Checklist */}
                  <div className="space-y-3">
                    {programData.requirements.map((req) => (
                      <div
                        key={req.id}
                        className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <Circle className="h-5 w-5 text-border" />
                          <span className="font-medium text-foreground">{req.label}</span>
                        </div>
                        <Badge variant={req.status === "required" ? "purple" : "outline"}>
                          {req.status}
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Application Progress
                    </h4>
                    <div className="h-3 bg-border rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-accent rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      0 of {programData.requirements.length} requirements complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Request Information Form */}
              <Card className="sticky top-28">
                <CardHeader className="bg-primary rounded-t-xl">
                  <CardTitle className="text-lg text-primary-foreground">
                    Get Program Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {!formSubmitted ? (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* 
                        Backend Integration:
                        POST /api/program-inquiry
                        data-program-id: computer-science
                        data-inquiry-type: program-info
                      */}
                      <FormField
                        label="Name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <FormField
                        label="Email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <FormField
                        label="Phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      <SelectField
                        label="Country"
                        required
                        options={countries}
                        placeholder="Select your country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-primary-dark">
                          Expected Start Term <span className="text-destructive">*</span>
                        </label>
                        <div className="flex gap-3">
                          {["fall", "spring", "summer"].map((term) => (
                            <label
                              key={term}
                              className={`flex-1 p-3 rounded-lg border-2 cursor-pointer text-center transition-all ${
                                formData.startTerm === term
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/30"
                              }`}
                            >
                              <input
                                type="radio"
                                name="startTerm"
                                value={term}
                                checked={formData.startTerm === term}
                                onChange={(e) => setFormData({ ...formData, startTerm: e.target.value })}
                                className="sr-only"
                              />
                              <span className="text-sm font-medium capitalize">{term}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <TextareaField
                        label="Questions/Comments"
                        placeholder="Any specific questions about the program?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        maxLength={500}
                        showCount
                      />

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={formData.privacy}
                          onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                        />
                        <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight">
                          I agree to receive communications and acknowledge the{" "}
                          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        variant="gold" 
                        className="w-full"
                        disabled={!formData.name || !formData.email || !formData.country || !formData.privacy}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Request
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Request Sent!</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        We'll contact you within 24 hours.
                      </p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Brochure
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Eligibility Quick Check */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Check Your Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary-dark">GPA</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="2.0"
                        max="4.0"
                        step="0.1"
                        value={eligibilityData.gpa}
                        onChange={(e) => setEligibilityData({ ...eligibilityData, gpa: parseFloat(e.target.value) })}
                        className="flex-1 accent-primary"
                      />
                      <span className="font-mono font-semibold text-primary w-12 text-right">
                        {eligibilityData.gpa.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  <SelectField
                    label="Previous Degree"
                    options={[
                      { value: "hs", label: "High School Diploma" },
                      { value: "associate", label: "Associate's Degree" },
                      { value: "bachelor", label: "Bachelor's Degree" },
                    ]}
                    placeholder="Select degree"
                    value={eligibilityData.degree}
                    onChange={(e) => setEligibilityData({ ...eligibilityData, degree: e.target.value })}
                  />

                  <SelectField
                    label="Country of Education"
                    options={countries}
                    placeholder="Select country"
                    value={eligibilityData.country}
                    onChange={(e) => setEligibilityData({ ...eligibilityData, country: e.target.value })}
                  />

                  <Button variant="gold" className="w-full" onClick={checkEligibility}>
                    Check Eligibility
                  </Button>

                  {eligibilityChecked && (
                    <div className="p-4 bg-success/10 rounded-xl border border-success/30">
                      <div className="flex items-center gap-2 text-success font-semibold mb-2">
                        <CheckCircle2 className="h-5 w-5" />
                        You Meet Requirements!
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You meet 5 of 5 basic requirements.
                      </p>
                      <Button variant="gold" size="sm" className="w-full mt-3">
                        Start Application
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">(123) 456-7890</span>
                    </a>
                    <a
                      href="mailto:admissions@university.edu"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">admissions@university.edu</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span className="text-sm">Engineering Building, Room 101</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Programs Floating Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary shadow-elegant p-4 z-40 animate-fade-up">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground font-medium">
                {compareList.length} program{compareList.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex gap-2">
                {compareList.map((slug) => (
                  <Badge key={slug} variant="gold" className="flex items-center gap-1">
                    {slug}
                    <button onClick={() => setCompareList(compareList.filter((s) => s !== slug))}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="hero-secondary" size="sm" onClick={() => setCompareList([])}>
                Clear All
              </Button>
              <Button variant="gold" size="sm" disabled={compareList.length < 2}>
                Compare Programs
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
