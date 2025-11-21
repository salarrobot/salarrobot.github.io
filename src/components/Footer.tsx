import { Mail, Linkedin, Github, Heart, ArrowUp, Sparkles, BookOpen, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About", href: "#about", icon: Sparkles },
  { label: "Research", href: "#research", icon: BookOpen },
  { label: "Experience", href: "#experience", icon: Code },
  { label: "Skills", href: "#skills", icon: Award },
  { label: "Projects", href: "#projects", icon: Code },
  { label: "Publications", href: "#publications", icon: BookOpen },
  { label: "Certifications", href: "#certifications", icon: Award },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <Sparkles className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary-foreground/20 blur-xl group-hover:blur-2xl transition-all" />
              </div>
              <h3 className="text-2xl font-bold">Salar Mokhtari Laleh</h3>
            </div>
            <p className="text-base opacity-90 leading-relaxed max-w-md">
              M.Sc. Student & Researcher specializing in Reinforcement Learning, 
              Deep Learning, and Humanoid Robotics at National Taiwan Normal University.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="mailto:Salarmokhtari0@gmail.com"
                className="group p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/salar-mokhtari-laleh-22508b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/salarrobot"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-foreground/50" />
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-all duration-300 hover:translate-x-2"
                >
                  <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-foreground/50" />
              Contact
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <p className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">Salarmokhtari0@gmail.com</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-lg">📍</span>
                <span>Taipei, Taiwan</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-90 flex items-center gap-2">
              Made with <Heart className="h-4 w-4 fill-current animate-pulse" /> in Taiwan
              <span className="hidden sm:inline">• © {new Date().getFullYear()} Salar Mokhtari Laleh</span>
            </p>
            <p className="text-sm opacity-90 sm:hidden">
              © {new Date().getFullYear()} All rights reserved
            </p>
            
            {/* Scroll to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="group bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300"
            >
              <span className="text-xs mr-2">Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
