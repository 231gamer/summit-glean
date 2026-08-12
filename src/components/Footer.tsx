import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";
import logoImage from "@/assets/lcc-transparent-logo.png";
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
    { label: "Colleges & Schools", href: "/colleges#schools" },
    { label: "Programs", href: "/colleges#programs" },
  ],
  admissions: [
    { label: "Admissions Overview", href: "/admissions" },
    { label: "Admission Requirements", href: "/admissions/requirements" },
    { label: "Tuition & Fees", href: "/admissions/tuition" },
    { label: "Scholarships & Financial Aid", href: "/admissions/scholarships" },
    { label: "How to Apply", href: "/admissions/how-to-apply" },
  ],
  about: [
    { label: "About LCC", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Faculty & Staff", href: "/about/faculty-staff" },
  ],
  updates: [
    { label: "News", href: "/updates/news" },
    { label: "Events", href: "/updates/events" },
    { label: "Contact Us", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
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
    <footer className="bg-white text-primary border-t">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImage} alt="LCC Logo" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-heading font-bold text-xl">Liberia Christian College</div>
                <div className="text-xs text-primary/60 tracking-wider uppercase">
                  Est. 1997
                </div>
              </div>
            </div>
            <p className="text-primary/70 mb-6 leading-relaxed">
              A world-class institution dedicated to academic excellence, groundbreaking research, and developing leaders who shape the future.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-primary">Stay Connected</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary/10 border-primary/20 text-primary placeholder:text-primary/50"
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
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-bold mb-4 text-primary">Academics</h4>
            <ul className="space-y-2.5">
              {footerLinks.academics.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-primary/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-primary">Admissions</h4>
            <ul className="space-y-2.5">
              {footerLinks.admissions.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-primary/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-primary">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-primary/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-primary">Updates</h4>
            <ul className="space-y-2.5">
              {footerLinks.updates.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className="text-sm text-primary/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-primary/20">
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+231777947739"
                  className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (+231) 777-947739
                </a>
                <a
                  href="tel:+231778747451"
                  className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (+231) 778-747451
                </a>
                <a
                  href="mailto:lccedu1997@gmail.com"
                  className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  lccedu1997@gmail.com
                </a>
                <div className="flex items-start gap-2 text-primary/70">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>5th Street & Dixville,<br />Monrovia, Liberia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary/60">
          <p>© {new Date().getFullYear()} Liberia Christian College. All rights reserved.</p>
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
