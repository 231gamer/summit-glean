import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  academics: [
    { label: "Undergraduate Programs", href: "#" },
    { label: "Graduate Programs", href: "#" },
    { label: "Online Learning", href: "#" },
    { label: "Academic Calendar", href: "#" },
    { label: "Libraries", href: "#" },
  ],
  admissions: [
    { label: "Apply Now", href: "#" },
    { label: "Tuition & Fees", href: "#" },
    { label: "Financial Aid", href: "#" },
    { label: "Visit Campus", href: "#" },
    { label: "Contact Admissions", href: "#" },
  ],
  about: [
    { label: "History & Mission", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "News & Events", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  resources: [
    { label: "Student Portal", href: "#" },
    { label: "Faculty & Staff", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Giving", href: "#" },
    { label: "Athletics", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-accent-foreground text-xl">
                U
              </div>
              <div>
                <div className="font-heading font-bold text-xl">University</div>
                <div className="text-xs text-primary-foreground/60 tracking-wider uppercase">
                  Est. 1850
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              A world-class institution dedicated to academic excellence, groundbreaking research, and developing leaders who shape the future.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Stay Connected</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="gold" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-bold mb-4">Academics</h4>
            <ul className="space-y-2.5">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Admissions</h4>
            <ul className="space-y-2.5">
              {footerLinks.admissions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (123) 456-7890
                </a>
                <a
                  href="mailto:info@university.edu"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@university.edu
                </a>
                <div className="flex items-start gap-2 text-primary-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>123 University Avenue,<br />City, State 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 University. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            <a href="#" className="hover:text-accent transition-colors">Emergency Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
