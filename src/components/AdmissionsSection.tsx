import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, ClipboardCheck, GraduationCap, CheckCircle, ArrowRight, Calendar, Users, Clock } from "lucide-react";
import { admissionSteps, admissionRequirements } from "@/data/admissions";

export function AdmissionsSection() {
  return (
    <section className="pt-16 lg:pt-20 pb-20 lg:pb-28 bg-gradient-to-b from-background to-muted/10">
      <div className="container px-4 sm:px-6">
        {/* Header - Enhanced */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="h-4 w-4" />
            Start Your Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-5 tracking-tight">
            Simple. Transparent.
            <span className="block text-primary mt-2">Accessible.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Our admission process is designed to be clear and straightforward,
            helping you focus on starting your academic journey with confidence.
          </p>
          
          {/* Quick Admission Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-sm font-medium">Simple Steps</p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2-3</div>
              <p className="text-sm font-medium">Weeks Processing</p>
            </div>
            <div className="h-10 w-px bg-border hidden sm:block"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Rolling</div>
              <p className="text-sm font-medium">Admissions</p>
            </div>
          </div>
        </div>

        {/* Steps - Enhanced with progression */}
        <div className="relative mb-20">
          {/* Connection line for steps */}
          <div className="hidden lg:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step number indicator */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <Card className="group relative overflow-hidden border-2 border-transparent hover:border-amber-200 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 pt-10">
                  {/* Gold accent bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="p-7">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    
                    <span className="text-sm font-semibold text-primary mb-2 text-center block">
                      Step {index + 1}
                    </span>
                    <CardTitle className="text-xl font-bold mb-4 text-center group-hover:text-primary transition-colors">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="text-center leading-relaxed">
                      {step.description}
                    </CardDescription>
                    
                    {/* Estimated time indicator */}
                    <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>1-2 weeks processing</span>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements - Enhanced */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white dark:bg-gray-900 shadow-lg">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            
            <CardHeader className="p-8">
              <div className="flex items-start justify-between mb-6">
                <CardTitle className="text-2xl lg:text-3xl font-bold">
                  Requirements for Enrollment
                </CardTitle>
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200">
                  All Applicants
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Document Requirements */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Required Documents
                  </h4>
                  <ul className="space-y-3">
                    {admissionRequirements.slice(0, 4).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommendation Letters */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Recommendation Letters
                  </h4>
                  <ul className="space-y-3">
                    {admissionRequirements.slice(4).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">✓</span>
                        </div>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Important Notes</h5>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      Applications are processed on a rolling basis. Submit all required documents at once to avoid delays.
                      Contact our admissions office for any questions about document requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Enhanced with gold hover */}
              <div className="mt-10 pt-6 border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <h4 className="font-bold text-lg mb-1">Ready to Apply?</h4>
                    <p className="text-muted-foreground text-sm">
                      Start your application today and join our community of learners.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-amber-600 group/apply px-8"
                    >
                      Apply Now
                      <ArrowRight className="h-5 w-5 ml-2 group-hover/apply:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
                    >
                      Download Forms
                    </Button>
                  </div>
                </div>
                
                {/* Secondary CTA */}
                <div className="text-center mt-8">
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20"
                  >
                    Need assistance? Contact Admissions Office →
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Financial aid applications are processed separately. Submit your admission application first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}