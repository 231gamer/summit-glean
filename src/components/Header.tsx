import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Academics",
    href: "/academics",
    submenu: [
      { label: "Undergraduate Programs", href: "/academics" },
      { label: "Research Centers", href: "/academics" },
      { label: "Academic Calendar", href: "/academics" },
    ],
  },
  {
    label: "Admissions",
    href: "/apply",
    submenu: [
      { label: "Apply Now", href: "/apply" },
      { label: "Tuition & Fees", href: "/apply" },
      { label: "Financial Aid", href: "/apply" },
      { label: "Visit Campus", href: "/contact" },
    ],
  },
  {
    label: "Campus Life",
    href: "/about",
    submenu: [
      { label: "Student Organizations", href: "/about" },
      { label: "Athletics", href: "/about" },
      { label: "Events", href: "/about" },
    ],
  },
  { label: "Research", href: "/academics" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

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
              <span>(+231) 777-352002 / (+231) 880-538928</span>
            </a>
            <a href="mailto:info@university.edu" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@lcc.edu.lr</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>5th Street, Beachside, Monrovia, Liberia</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#alumni" className="hover:text-accent transition-colors">Donate</a>
            <a href="#give" className="hover:text-accent transition-colors">Alumni</a>
            <button
              type="button"
              onClick={() => setIsPortalOpen(true)}
              className="hover:text-accent transition-colors"
            >
              Student Portal
            </button>
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
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-accent-foreground text-lg">
              LCC
            </div>
            <div className="text-primary-foreground">
              <div className="font-heading font-bold text-lg leading-tight">Liberia Christian College</div>
              <div className="text-xs text-primary-foreground/70 tracking-wider uppercase">Est. 1997</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors rounded-lg",
                    activeSubmenu === item.label && "text-accent"
                  )}
                  activeClassName="text-accent bg-primary-foreground/10"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </NavLink>
                
                {/* Submenu */}
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-elegant border border-border py-2 min-w-[220px]">
                      {item.submenu.map((subitem) => (
                        <NavLink
                          key={subitem.label}
                          to={subitem.href}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                          activeClassName="text-primary bg-primary/5 font-semibold"
                        >
                          {subitem.label}
                        </NavLink>
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
                  <NavLink
                    to={item.href}
                    className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                    activeClassName="text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && (
                    <div className="pb-3 pl-4 space-y-2">
                      {item.submenu.map((subitem) => (
                        <NavLink
                          key={subitem.label}
                          to={subitem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          activeClassName="text-primary font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </NavLink>
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

      <AlertDialog open={isPortalOpen} onOpenChange={setIsPortalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Student Portal</AlertDialogTitle>
            <AlertDialogDescription>
              Coming soon. We are putting the finishing touches on the portal experience.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Got it</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
}
