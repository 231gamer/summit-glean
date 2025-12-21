import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Academics",
    href: "#academics",
    submenu: [
      { label: "Undergraduate Programs", href: "#undergraduate" },
      { label: "Graduate Programs", href: "#graduate" },
      { label: "Research Centers", href: "#research" },
      { label: "Academic Calendar", href: "#calendar" },
    ],
  },
  {
    label: "Admissions",
    href: "#admissions",
    submenu: [
      { label: "Apply Now", href: "#apply" },
      { label: "Tuition & Fees", href: "#tuition" },
      { label: "Financial Aid", href: "#financial-aid" },
      { label: "Visit Campus", href: "#visit" },
    ],
  },
  {
    label: "Campus Life",
    href: "#campus-life",
    submenu: [
      { label: "Housing", href: "#housing" },
      { label: "Student Organizations", href: "#organizations" },
      { label: "Athletics", href: "#athletics" },
      { label: "Events", href: "#events" },
    ],
  },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-dark text-primary-foreground py-2 hidden md:block">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@university.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@university.edu</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>123 University Avenue, City, State 12345</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#alumni" className="hover:text-accent transition-colors">Alumni</a>
            <a href="#give" className="hover:text-accent transition-colors">Give</a>
            <a href="#portal" className="hover:text-accent transition-colors">Student Portal</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-primary shadow-elegant py-3"
            : "bg-primary/95 backdrop-blur-sm py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-accent-foreground text-lg">
              U
            </div>
            <div className="text-primary-foreground">
              <div className="font-heading font-bold text-lg leading-tight">University</div>
              <div className="text-xs text-primary-foreground/70 tracking-wider uppercase">Est. 1850</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors rounded-lg",
                    activeSubmenu === item.label && "text-accent"
                  )}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </a>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-elegant border border-border py-2 min-w-[220px]">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="gold" size="default">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-elegant animate-fade-in">
            <div className="container py-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-border last:border-b-0">
                  <a
                    href={item.href}
                    className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pb-3 pl-4 space-y-2">
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="gold" className="w-full">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Admissions
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
