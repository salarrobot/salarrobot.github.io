import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: "Salarmokhtari0@gmail.com",
      href: "mailto:Salarmokhtari0@gmail.com"
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "+886 (921) 110-193",
      href: "tel:+886921110193"
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: "Taipei, Taiwan",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: t('contact.linkedinProfile'),
      href: "https://www.linkedin.com/in/salar-mokhtari-laleh-22508b91/"
    },
    {
      icon: Github,
      label: t('contact.githubProfile'),
      href: "https://github.com/salarrobot"
    }
  ];
  
  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      variant={variant}
    >
      <Card className="max-w-5xl mx-auto shadow-elegant border-border/50 animate-fade-in">
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.info')}</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-colors text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect with Me */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.connect')}</h3>
              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 text-base hover:bg-primary/5 hover:border-primary/40"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-lg font-semibold text-foreground mb-3">{t('contact.researchInterests')}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('contact.researchText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
};
