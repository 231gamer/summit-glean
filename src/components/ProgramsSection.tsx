import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ExternalLink,
  Building2,
  Briefcase,
  Sprout,
  Cpu,
  BookOpen,
  HeartPulse,
  Landmark,
  GraduationCap,
  Users,
  Database,
  Heart,
  Scale,
  Laptop,
  BookMarked,
  Leaf,
  Microscope,
  Globe,
  Megaphone,
  School,
  Zap,
  Target,
  BarChart
} from "lucide-react";
import { schools } from "@/data/colleges/schools";
import { ScrollReveal, StaggerContainer, StaggerItem, InteractiveCard, Counter } from "@/components/animations";
import { motion } from "framer-motion";

// Icon mapping for each school
const schoolIcons: Record<string, React.ComponentType<any>> = {
  "School of Business": Briefcase,
  "School of Agriculture": Sprout,
  "School of Science & Technology": Cpu,
  "School of Christian Education": BookOpen,
  "School of Public Health & Environmental Science": HeartPulse,
  "School of Liberal Arts": Landmark,
  "School of Education": GraduationCap,
  "School of Continuing Education": Users
};

// Program count for each school (for display)
const programCounts: Record<string, string> = {
  "School of Business": "9 programs",
  "School of Agriculture": "3 programs",
  "School of Science & Technology": "5 programs",
  "School of Christian Education": "3 programs",
  "School of Public Health & Environmental Science": "2 programs",
  "School of Liberal Arts": "3 programs",
  "School of Education": "5 programs",
  "School of Continuing Education": "22+ short courses"
};

export function ProgramsSection() {
  const stats = [
    { value: 8, label: "Colleges & Schools", suffix: "" },
    { value: 30, label: "Degree Programs", suffix: "+" },
    { value: 50, label: "Short Courses", suffix: "+" },
    { value: 0, label: "Study Options", suffix: "Flexible", isText: true }
  ];

  return (
    <section id="academics" className="pt-20 lg:pt-24 pb-12 lg:pb-16 bg-gradient-to-b from-background to-muted/5">
      <div className="container px-4 sm:px-6">
        {/* Section Header - Animated */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-5">
            <BookMarked className="h-4 w-4" />
            Academic Programs
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-5 tracking-tight">
            Colleges & Schools
            <span className="block text-primary text-3xl md:text-4xl mt-3">
              Undergraduate & Professional Training
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from diverse programs designed for career success, offering both traditional degrees and flexible professional training.
          </p>
        </ScrollReveal>

        {/* Quick Stats Bar - Counter animations */}
        <ScrollReveal direction="up" delay={0.2} className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.isText ? (
                    stat.suffix
                  ) : (
                    <Counter from={0} to={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Schools Grid - Staggered animations */}
        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {schools.map((school) => {
            const Icon = schoolIcons[school.name] || Building2;
            const isContinuing = school.category === "continuing";

            return (
              <StaggerItem key={school.name}>
                <InteractiveCard
                  className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300"
                  tiltIntensity={0.02}
                >
                  {/* Gold accent bar on hover */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-8 translate-x-8"></div>

                  <CardHeader className="p-7">
                    {/* Professional Training Badge */}
                    {isContinuing && (
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200">
                          <Zap className="h-3 w-3 mr-1" />
                          Professional Training
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground">Flexible</span>
                      </div>
                    )}

                    {/* School-specific icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-7 w-7 text-primary" />
                    </motion.div>

                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {school.name}
                    </CardTitle>

                    <CardDescription className="text-base leading-relaxed">
                      {school.description}
                    </CardDescription>

                    {/* Program count and details */}
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Target className="h-3 w-3 text-primary" />
                        <span>{programCounts[school.name]}</span>
                      </div>
                      {!isContinuing && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BarChart className="h-3 w-3 text-primary" />
                          <span>{school.duration} • {school.creditHours} credits</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardFooter className="p-7 pt-0 flex gap-3">
                    <Button
                      variant={isContinuing ? "outline" : "default"}
                      className={`flex-1 group/btn ${!isContinuing ? "bg-primary hover:bg-amber-600" : "hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300"}`}
                    >
                      {isContinuing ? "View Courses" : "View Programs"}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/20"
                      aria-label={`Learn more about ${school.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </InteractiveCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All CTA - Enhanced with animations */}
        <ScrollReveal direction="up" delay={0.3} className="text-center mt-8 pt-8 border-t">
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 border group/cta hover:border-amber-200 transition-colors"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-0 sm:mb-0">
                Our admissions team can guide you to the right program for your career goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-amber-600 group/explore"
              >
                Explore All Programs
                <ArrowRight className="h-5 w-5 ml-2 group-hover/explore:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 hover:text-amber-700 dark:hover:text-amber-400"
              >
                Contact Admissions
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}