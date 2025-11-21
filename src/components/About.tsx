import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Brain, Computer, Sparkles, Network } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const highlights = [
    {
      icon: Brain,
      title: t('about.highlights.machineLearning.title'),
      description: t('about.highlights.machineLearning.description')
    },
    {
      icon: Computer,
      title: t('about.highlights.robotics.title'),
      description: t('about.highlights.robotics.description')
    },
    {
      icon: Sparkles,
      title: t('about.highlights.appliedAI.title'),
      description: t('about.highlights.appliedAI.description')
    },
    {
      icon: Network,
      title: t('about.highlights.hci.title'),
      description: t('about.highlights.hci.description')
    }
  ];
  
  return (
    <Section
      id="about"
      title={t('about.title')}
      subtitle={t('about.subtitle')}
      variant={variant}
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in" data-i18n>
        <Card className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth">
          <h3 className="text-2xl font-bold text-primary mb-4">{t('about.backgroundTitle')}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t('about.backgroundText1')}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.backgroundText2')}
          </p>
        </Card>

        <Card className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth">
          <h3 className="text-2xl font-bold text-primary mb-4">{t('about.currentWorkTitle')}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t('about.currentWorkText1')}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.currentWorkText2')}
          </p>
        </Card>
      </div>

      <div className="grid md:grid-cols-4 gap-6 animate-fade-in-up">
        {highlights.map((item, index) => (
          <Card
            key={index}
            className="p-6 text-center hover:scale-105 transition-smooth shadow-elegant hover:shadow-lg-custom"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
