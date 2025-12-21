import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, TextareaField, SelectField } from "@/components/ui/form-field";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  History, Target, Award, Users, Building, Leaf, Globe, Heart,
  Mail, MapPin, Calendar, CheckCircle2, ChevronRight,
} from "lucide-react";

const leadership = [
  { name: "Dr. Robert Williams", title: "President", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face" },
  { name: "Dr. Maria Garcia", title: "Provost", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face" },
  { name: "Dr. James Chen", title: "Dean of Students", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
];

const milestones = [
  { year: "1850", event: "University founded with 12 students" },
  { year: "1920", event: "First graduate program established" },
  { year: "1965", event: "Expanded to 10 colleges and schools" },
  { year: "2000", event: "Launched online learning initiatives" },
  { year: "2024", event: "Celebrating 174 years of excellence" },
];

const values = [
  { icon: Target, title: "Excellence", description: "Pursuing the highest standards in education and research" },
  { icon: Heart, title: "Integrity", description: "Upholding honesty and ethical principles in all endeavors" },
  { icon: Users, title: "Community", description: "Fostering a diverse and inclusive learning environment" },
  { icon: Globe, title: "Innovation", description: "Embracing new ideas and transformative approaches" },
];

export default function About() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [tourDate, setTourDate] = useState("");
  const [pledges, setPledges] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="gold" className="mb-4">Est. 1850</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              About Our University
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              For over 170 years, we've been committed to academic excellence, groundbreaking research, 
              and developing leaders who shape the future.
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
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop"
                alt="Campus" className="rounded-2xl shadow-elegant" />
              <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-xl shadow-gold">
                <div className="text-3xl font-heading font-bold text-accent-foreground">174</div>
                <div className="text-sm text-accent-foreground/80">Years of Excellence</div>
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

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">University Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader) => (
              <Card key={leader.name} className="text-center card-hover">
                <CardContent className="pt-6">
                  <img src={leader.image} alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20" />
                  <h4 className="font-heading font-bold text-lg">{leader.name}</h4>
                  <p className="text-sm text-primary mb-4">{leader.title}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Contact Office</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Contact {leader.title}'s Office</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <FormField label="Your Name" value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
                        <FormField label="Email" type="email" value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
                        <SelectField label="Subject" options={[
                          { value: "general", label: "General Inquiry" },
                          { value: "media", label: "Media Request" },
                          { value: "speaking", label: "Speaking Engagement" },
                        ]} value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} />
                        <TextareaField label="Message" value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
                        <Button variant="gold" className="w-full">Send Message</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
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
