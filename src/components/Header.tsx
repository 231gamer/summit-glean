import { useState, useEffect } from "react";
import { Menu, Search, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logoImage from "@/assets/lcc-transparent-logo.png";
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

interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navGroups: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "Academics",
    children: [
      { label: "Colleges & Schools", href: "/colleges#schools" },
      { label: "Programs", href: "/colleges#programs" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Admissions Overview", href: "/admissions" },
      { label: "Admission Requirements", href: "/admissions/requirements" },
      { label: "Tuition & Fees", href: "/admissions/tuition" },
      { label: "Scholarships & Financial Aid", href: "/admissions/scholarships" },
      { label: "How to Apply", href: "/admissions/how-to-apply" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About LCC", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Faculty & Staff", href: "/about/faculty-staff" },
    ],
  },
  {
    label: "Updates",
    children: [
      { label: "News", href: "/updates/news" },
      { label: "Events", href: "/updates/events" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden md:block border-b">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+231777947739" className="flex items-center gap-1.5 hover:text-accent transition-colors text-white">
              <Phone className="h-3.5 w-3.5" />
              <span>(+231) 777-947739 / (+231) 778-747451</span>
            </a>
            <a href="mailto:lccedu1997@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors text-white">
              <Mail className="h-3.5 w-3.5" />
              <span>lccedu1997@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="h-3.5 w-3.5" />
              <span>5th Street & Dixville, Monrovia, Liberia</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPortalOpen(true)}
              className="hover:text-accent transition-colors text-white"
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
            ? "bg-white shadow-elegant py-3 border-b"
            : "bg-white/95 backdrop-blur-sm py-4 border-b"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="LCC Logo" className="h-10 w-10 object-contain" />
            <div className="text-primary">
              <div className="font-heading font-bold text-lg leading-tight">Liberia Christian College</div>
              <div className="text-xs text-primary/70 tracking-wider uppercase">Est. 1997</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" delayDuration={100}>
            <NavigationMenuList>
              {navGroups.map((group) =>
                group.children ? (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuTrigger className="bg-transparent text-primary hover:bg-primary/5 hover:text-accent data-[state=open]:bg-primary/5 data-[state=open]:text-accent font-medium text-sm">
                      {group.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[260px] gap-1 p-2 bg-card">
                        {group.children.map((child) => (
                          <li key={child.label}>
                            <NavigationMenuLink asChild>
                              <NavLink
                                to={child.href}
                                className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                activeClassName="text-primary bg-primary/5 font-semibold"
                              >
                                {child.label}
                              </NavLink>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={group.label}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={group.href!}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-primary hover:bg-primary/5 hover:text-accent font-medium text-sm"
                        )}
                        activeClassName="text-accent bg-primary/5"
                      >
                        {group.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="gold" size="default" asChild>
              <NavLink to="/apply">Apply Now</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto p-0">
              <SheetHeader className="p-6 pb-2 text-left">
                <SheetTitle className="flex items-center gap-3">
                  <img src={logoImage} alt="LCC Logo" className="h-9 w-9 object-contain" />
                  <span className="font-heading text-base text-primary">Liberia Christian College</span>
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Mobile" className="px-3 pb-6">
                <Accordion type="multiple" className="w-full">
                  {navGroups.map((group) =>
                    group.children ? (
                      <AccordionItem key={group.label} value={group.label} className="border-b border-border">
                        <AccordionTrigger className="px-3 text-base font-medium text-foreground hover:no-underline hover:text-primary">
                          {group.label}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="flex flex-col gap-1 pb-2">
                            {group.children.map((child) => (
                              <li key={child.label}>
                                <NavLink
                                  to={child.href}
                                  onClick={closeMobileMenu}
                                  className="block rounded-lg px-6 py-2.5 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                                  activeClassName="text-primary font-semibold bg-primary/5"
                                >
                                  {child.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={group.label} className="border-b border-border">
                        <NavLink
                          to={group.href!}
                          onClick={closeMobileMenu}
                          className="block px-3 py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                          activeClassName="text-primary"
                        >
                          {group.label}
                        </NavLink>
                      </div>
                    )
                  )}
                </Accordion>

                <div className="pt-6 flex flex-col gap-3">
                  <Button variant="gold" className="w-full" asChild>
                    <NavLink to="/apply" onClick={closeMobileMenu}>
                      Apply Now
                    </NavLink>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <NavLink to="/contact" onClick={closeMobileMenu}>
                      Contact Admissions
                    </NavLink>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
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
