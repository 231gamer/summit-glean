import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, TextareaField, SelectField } from "@/components/ui/form-field";
import { FileUpload } from "@/components/ui/file-upload";
import { ProgressSteps } from "@/components/ui/progress-steps";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, User, FileText, Users, CheckCircle2, ArrowLeft, ArrowRight, Search } from "lucide-react";

const steps = ["Program", "Personal Info", "Academic History", "Documents", "Review"];

const programs = [
  { id: "cs", name: "Computer Science", degree: "B.S.", school: "Engineering" },
  { id: "mba", name: "Business Administration", degree: "MBA", school: "Business" },
  { id: "bio", name: "Biology", degree: "B.S.", school: "Sciences" },
];

export default function Apply() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", dob: "", country: "",
    schoolName: "", gpa: "", degreeType: "", graduationYear: "",
    statement: "", terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const canProceed = () => {
    if (currentStep === 0) return !!selectedProgram;
    if (currentStep === 1) return formData.firstName && formData.lastName && formData.email;
    if (currentStep === 2) return formData.schoolName && formData.gpa;
    if (currentStep === 3) return formData.statement.length > 100;
    if (currentStep === 4) return formData.terms;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-32">
          <div className="container max-w-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-heading font-bold mb-4">Application Submitted!</h1>
            <p className="text-muted-foreground mb-2">Application ID: <span className="font-mono text-primary">APP-2024-XYZ789</span></p>
            <p className="text-muted-foreground mb-8">Check your email for confirmation and next steps.</p>
            <div className="flex gap-4 justify-center">
              <Button variant="gold">View Application Status</Button>
              <Button variant="outline">Return Home</Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="gradient-hero pt-32 pb-12">
        <div className="container text-center">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground mb-4">Apply Now</h1>
          <p className="text-primary-foreground/80">Start your journey with us today</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <ProgressSteps steps={steps} currentStep={currentStep} className="mb-8" />

          <Card>
            <CardContent className="p-6 md:p-8">
              {/* Step 0: Program Selection */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-bold">Select Your Program</h2>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input type="text" placeholder="Search programs..." className="w-full pl-10 pr-4 py-3 rounded-lg border border-input" />
                  </div>
                  <div className="space-y-3">
                    {programs.map((prog) => (
                      <button key={prog.id} onClick={() => setSelectedProgram(prog.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                          selectedProgram === prog.id ? "border-accent bg-accent/5" : "border-border hover:border-primary/30"
                        }`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{prog.name}</div>
                            <div className="text-sm text-muted-foreground">{prog.school}</div>
                          </div>
                        </div>
                        <Badge variant="gold">{prog.degree}</Badge>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 1: Personal Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField label="First Name" required value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                    <FormField label="Last Name" required value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField label="Email" type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <FormField label="Phone" type="tel" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField label="Date of Birth" type="date" value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                    <SelectField label="Country" options={[
                      { value: "us", label: "United States" },
                      { value: "ca", label: "Canada" },
                      { value: "other", label: "Other" },
                    ]} value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                  </div>
                </div>
              )}

              {/* Step 2: Academic History */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />Academic History
                  </h2>
                  <FormField label="School Name" required value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })} />
                  <div className="grid md:grid-cols-3 gap-4">
                    <FormField label="GPA" required value={formData.gpa}
                      onChange={(e) => setFormData({ ...formData, gpa: e.target.value })} />
                    <SelectField label="Degree Type" options={[
                      { value: "hs", label: "High School" },
                      { value: "bachelor", label: "Bachelor's" },
                    ]} value={formData.degreeType} onChange={(e) => setFormData({ ...formData, degreeType: e.target.value })} />
                    <FormField label="Graduation Year" value={formData.graduationYear}
                      onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })} />
                  </div>
                  <FileUpload label="Upload Transcript" accept=".pdf,.doc,.docx" helperText="PDF or Word, max 10MB" />
                </div>
              )}

              {/* Step 3: Documents */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />Supporting Documents
                  </h2>
                  <TextareaField label="Personal Statement" required placeholder="Tell us about yourself and your goals..."
                    value={formData.statement} onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    maxLength={2000} showCount helperText="500-750 words recommended" />
                  <FileUpload label="Resume/CV (Optional)" accept=".pdf,.doc,.docx" />
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-heading font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />Review & Submit
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-background rounded-xl border border-border">
                      <div className="text-sm text-muted-foreground">Program</div>
                      <div className="font-semibold">{programs.find((p) => p.id === selectedProgram)?.name}</div>
                    </div>
                    <div className="p-4 bg-background rounded-xl border border-border">
                      <div className="text-sm text-muted-foreground">Applicant</div>
                      <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                      <div className="text-sm text-muted-foreground">{formData.email}</div>
                    </div>
                    <div className="p-4 bg-accent-light rounded-xl">
                      <div className="flex justify-between items-center">
                        <span>Application Fee</span>
                        <span className="font-bold text-accent-foreground">$75.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="terms" checked={formData.terms}
                      onCheckedChange={(c) => setFormData({ ...formData, terms: c as boolean })} />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I certify that all information is accurate and agree to the Terms & Conditions.
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                  <ArrowLeft className="h-4 w-4 mr-2" />Back
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button variant="gold" onClick={() => setCurrentStep(currentStep + 1)} disabled={!canProceed()}>
                    Continue<ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button variant="gold" onClick={handleSubmit} disabled={!canProceed()}>
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
