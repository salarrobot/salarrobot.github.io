import { ArrowDown, Mail, Linkedin, Github, Download, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-subtle"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 md:order-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
              <img
                src={profileImage}
                alt="Salar Mokhtari Laleh"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-lg-custom border-4 border-background"
              />
              {/* ERC Lab Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Badge className="gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Building2 className="h-4 w-4" />
                  <a 
                    href="https://www.ntnuerc.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    ERC Lab
                  </a>
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left space-y-6 animate-fade-in-up">
            <div>
              <p className="text-accent font-semibold text-lg mb-2 animate-pulse">
                <span className="inline-block animate-fade-in">{t('hero.title')}</span>
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
                Salar Mokhtari Laleh
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="gradient-primary hover:opacity-90 transition-smooth shadow-elegant">
                <a href="/Salar_Moktari_Laleh_CV.pdf" download="Salar_Moktari_Laleh_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  {t('hero.cv')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/40">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {t('hero.contact')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/40">
                <a href="#research">
                  <FileText className="mr-2 h-5 w-5" />
                  {t('hero.learnMore')}
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://www.linkedin.com/in/salar-mokhtari-laleh-22508b91/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/salarrobot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:Salarmokhtari0@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://orcid.org/0009-0008-7469-2392"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="ORCID Profile"
              >
                <svg className="h-5 w-5" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/>
                  <path d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM71.3 54.8c0 5.2-4.2 9.4-9.4 9.4s-9.4-4.2-9.4-9.4 4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </a>
    </section>
  );
};
