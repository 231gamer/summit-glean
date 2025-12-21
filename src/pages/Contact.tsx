import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, TextareaField, SelectField } from "@/components/ui/form-field";
import { Checkbox } from "@/components/ui/checkbox";
import { FormProgress } from "@/components/ui/progress-steps";
import {
  GraduationCap,
  HelpCircle,
  Mic,
  Users,
  MoreHorizontal,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Search,
  Building,
} from "lucide-react";

const inquiryTypes = [
  { id: "admissions", label: "Admissions", icon: GraduationCap, description: "Questions about applying" },
  { id: "general", label: "General Information", icon: HelpCircle, description: "General inquiries" },
  { id: "media", label: "Media & Press", icon: Mic, description: "Press and media requests" },
  { id: "alumni", label: "Alumni Relations", icon: Users, description: "Alumni services" },
  { id: "other", label: "Other", icon: MoreHorizontal, description: "Other inquiries" },
];

const departments = [
  { name: "Admissions Office", email: "admissions@university.edu", phone: "(123) 456-7890", location: "Main Hall 101" },
  { name: "Financial Aid", email: "finaid@university.edu", phone: "(123) 456-7891", location: "Student Services 205" },
  { name: "Registrar", email: "registrar@university.edu", phone: "(123) 456-7892", location: "Admin Building 102" },
  { name: "Student Services", email: "studentservices@university.edu", phone: "(123) 456-7893", location: "Student Center 100" },
  { name: "International Students", email: "international@university.edu", phone: "(123) 456-7894", location: "Global Center 301" },
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", program: "", message: "", consent: false,
  });
  const [visitData, setVisitData] = useState({
    date: "", time: "", guests: "1", accommodations: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const filteredDepts = departments.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're here to help. Reach out with questions or schedule a campus visit.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Step 1: Inquiry Type */}
                      {formStep === 0 && (
                        <div className="space-y-4">
                          <h3 className="font-semibold text-foreground">What can we help you with?</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {inquiryTypes.map((type) => (
                              <button
                                key={type.id}
                                type="button"
                                onClick={() => { setInquiryType(type.id); setFormStep(1); }}
                                className={`p-4 rounded-xl border-2 text-center transition-all hover:border-primary ${
                                  inquiryType === type.id ? "border-primary bg-primary/5" : "border-border"
                                }`}
                              >
                                <type.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <div className="font-medium text-sm">{type.label}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 2: Form Fields */}
                      {formStep === 1 && (
                        <div className="space-y-4">
                          <FormProgress currentStep={1} totalSteps={2} />
                          <div className="grid md:grid-cols-2 gap-4">
                            <FormField label="Full Name" required placeholder="Your name"
                              value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <FormField label="Email" type="email" required placeholder="your@email.com"
                              value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                          </div>
                          <FormField label="Phone" type="tel" placeholder="(123) 456-7890"
                            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                          {inquiryType === "admissions" && (
                            <SelectField label="Program of Interest" options={[
                              { value: "cs", label: "Computer Science" },
                              { value: "business", label: "Business Administration" },
                              { value: "engineering", label: "Engineering" },
                            ]} placeholder="Select a program" value={formData.program}
                              onChange={(e) => setFormData({ ...formData, program: e.target.value })} />
                          )}
                          <TextareaField label="Message" required placeholder="How can we help you?"
                            value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            maxLength={1000} showCount />
                          <div className="flex items-start gap-3">
                            <Checkbox id="consent" checked={formData.consent}
                              onCheckedChange={(c) => setFormData({ ...formData, consent: c as boolean })} />
                            <label htmlFor="consent" className="text-sm text-muted-foreground">
                              I agree to receive communications and acknowledge the Privacy Policy
                            </label>
                          </div>
                          <div className="flex gap-3">
                            <Button type="button" variant="outline" onClick={() => setFormStep(0)}>Back</Button>
                            <Button type="submit" variant="gold" className="flex-1"
                              disabled={!formData.name || !formData.email || !formData.message || !formData.consent}>
                              Send Message
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-2">Reference: CON-2024-ABCD123</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Visit Scheduling */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="bg-primary rounded-t-xl">
                  <CardTitle className="text-primary-foreground">Schedule a Visit</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <FormField label="Preferred Date" type="date" value={visitData.date}
                    onChange={(e) => setVisitData({ ...visitData, date: e.target.value })} />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary-dark">Time Slot</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button key={slot} type="button" onClick={() => setVisitData({ ...visitData, time: slot })}
                          className={`p-2 text-xs rounded-lg border-2 transition-all ${
                            visitData.time === slot ? "border-accent bg-accent/10" : "border-border hover:border-primary/30"
                          }`}>{slot}</button>
                      ))}
                    </div>
                  </div>
                  <SelectField label="Number of Guests" options={[1,2,3,4,5].map((n) => ({ value: String(n), label: String(n) }))}
                    value={visitData.guests} onChange={(e) => setVisitData({ ...visitData, guests: e.target.value })} />
                  <Button variant="gold" className="w-full" disabled={!visitData.date || !visitData.time}>
                    <Calendar className="h-4 w-4 mr-2" />Schedule Visit
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Quick Contact</h4>
                  <div className="space-y-3 text-sm">
                    <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                      <Phone className="h-4 w-4" />(123) 456-7890</a>
                    <a href="mailto:info@university.edu" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                      <Mail className="h-4 w-4" />info@university.edu</a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4" />123 University Avenue</div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-4 w-4" />Mon-Fri: 8AM - 5PM</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Department Directory */}
          <Card className="mt-12">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle>Department Directory</CardTitle>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="text" placeholder="Search departments..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-input bg-background text-sm"
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left p-4 font-semibold text-primary">Department</th>
                      <th className="text-left p-4 font-semibold text-primary">Email</th>
                      <th className="text-left p-4 font-semibold text-primary">Phone</th>
                      <th className="text-left p-4 font-semibold text-primary">Location</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDepts.map((dept) => (
                      <tr key={dept.name} className="border-b border-border hover:bg-background">
                        <td className="p-4 font-medium">{dept.name}</td>
                        <td className="p-4"><a href={`mailto:${dept.email}`} className="text-primary hover:underline">{dept.email}</a></td>
                        <td className="p-4 text-muted-foreground">{dept.phone}</td>
                        <td className="p-4 text-muted-foreground">{dept.location}</td>
                        <td className="p-4"><Button variant="outline" size="sm">Contact</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
