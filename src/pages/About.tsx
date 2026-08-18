import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  History, Target, Award, Users, Building, Leaf, Globe, Heart,
  Mail, MapPin, Calendar, CheckCircle2, ChevronRight, UserRound,
} from "lucide-react";
import { FOUNDING_YEAR } from "@/lib/seo";

const milestones = [
  { year: FOUNDING_YEAR, event: "Liberia Christian College founded" },
];

const values = [
  { icon: Target, title: "Excellence", description: "Pursuing the highest standards in education and research" },
  { icon: Heart, title: "Integrity", description: "Upholding honesty and ethical principles in all endeavors" },
  { icon: Users, title: "Community", description: "Fostering a diverse and inclusive learning environment" },
  { icon: Globe, title: "Innovation", description: "Embracing new ideas and transformative approaches" },
];

export default function About() {
  const [tourDate, setTourDate] = useState("");
  const [pledges, setPledges] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Liberia Christian College"
        description="Learn about Liberia Christian College's mission, values, and leadership as an institution preparing men and women for ministry and professional discipline."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Est. {FOUNDING_YEAR}</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              About Liberia Christian College
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Liberia Christian College is committed to preparing men and women for ministry and
              professional discipline through faith-centered, academically rigorous education.
            </p>
            <div className="flex gap-4">
              <Button variant="gold">Our History</Button>
              <Button variant="hero-secondary">Virtual Tour</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="purple" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Empowering Minds, Transforming Lives
              </h2>
              <p className="text-muted-foreground mb-6">
                Our mission is to advance knowledge, foster innovation, and prepare students to become 
                ethical leaders and engaged citizens in a diverse global society.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="p-4 bg-card rounded-xl border border-border">
                    <value.icon className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/diville-main-campus.png"
                alt="Liberia Christian College campus" className="rounded-2xl shadow-elegant" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-gold">
                <div className="text-3xl font-heading font-bold text-accent-foreground">{FOUNDING_YEAR}</div>
                <div className="text-sm text-accent-foreground/80">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="w-20 text-right">
                  <span className="font-heading font-bold text-xl text-accent">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  {i < milestones.length - 1 && <div className="absolute top-4 left-1.5 w-0.5 h-16 bg-border" />}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">Governance</Badge>
            <h2 className="text-3xl font-heading font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Liberia Christian College is guided by dedicated leadership and a growing faculty and staff community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="text-center card-hover">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserRound className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">College Leadership</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Meet the leaders guiding LCC's academic mission and institutional growth.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about/leadership">View Leadership</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center card-hover">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Faculty & Staff</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Learn about the academic and administrative community that supports every student.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/about/faculty-staff">View Faculty & Staff</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour Booking */}
      <section className="py-16 gradient-hero">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">Experience Campus</Badge>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Book a Virtual Tour</h2>
            <p className="text-primary-foreground/80 mb-8">Explore our beautiful campus from anywhere in the world.</p>
            <Card>
              <CardContent className="p-6 space-y-4">
                <FormField label="Select Date" type="date" value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)} />
                <Button variant="gold" className="w-full" disabled={!tourDate}>
                  <Calendar className="h-4 w-4 mr-2" />Schedule Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <Leaf className="h-12 w-12 text-success mx-auto mb-4" />
            <h2 className="text-3xl font-heading font-bold mb-4">Sustainability Pledge</h2>
            <p className="text-muted-foreground">Join our commitment to a sustainable future</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3 mb-6">
                {["Reduce paper usage", "Participate in clean-up events", "Use reusable containers", "Carpool or use public transit"].map((pledge) => (
                  <label key={pledge} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-primary/5 cursor-pointer">
                    <input type="checkbox" checked={pledges.includes(pledge)}
                      onChange={(e) => setPledges(e.target.checked ? [...pledges, pledge] : pledges.filter((p) => p !== pledge))}
                      className="w-5 h-5 accent-primary" />
                    <span>{pledge}</span>
                  </label>
                ))}
              </div>
              <Button variant="gold" className="w-full" disabled={pledges.length === 0}>
                Take the Pledge ({pledges.length} selected)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
