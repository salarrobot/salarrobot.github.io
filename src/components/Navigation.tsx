import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navItems = [
  { key: "about", href: "#about" },
  { key: "research", href: "#research" },
  { key: "education", href: "#education" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "publications", href: "#publications" },
  { key: "certifications", href: "#certifications" },
  { key: "contact", href: "#contact" },
];

export const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.research'), href: "#research" },
    { label: t('nav.education'), href: "#education" },
    { label: t('nav.experience'), href: "#experience" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.publications'), href: "#publications" },
    { label: t('nav.certifications'), href: "#certifications" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-elegant border-b border-border/50"
          : "bg-gradient-to-b from-background/40 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xl font-bold gradient-text hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <Sparkles className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="hidden sm:inline">Salar Mokhtari Laleh</span>
            <span className="sm:hidden">SML</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 group",
                  activeSection === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg animate-pulse" />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform" />
              {isMobileMenuOpen ? (
                <X className="relative z-10 transition-transform rotate-0 group-hover:rotate-90 duration-300" />
              ) : (
                <Menu className="relative z-10 transition-transform group-hover:scale-110 duration-300" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in shadow-elegant">
          <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-6 py-4 text-base font-medium rounded-lg transition-all duration-300 animate-fade-in",
                  activeSection === item.href
                    ? "gradient-primary text-primary-foreground shadow-lg"
                    : "text-foreground hover:text-primary hover:bg-muted/50 hover:translate-x-2"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-3">
                  <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === item.href ? "bg-primary-foreground" : "bg-primary/50"
                  )} />
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
