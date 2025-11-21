import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, GraduationCap, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    title: "Linear Algebra for Machine Learning and Data Science",
    organization: "DeepLearning.AI",
    credentialId: "G6YGAZJNJP7X",
    icon: GraduationCap
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    organization: "DeepLearning.AI",
    credentialId: "Not specified",
    icon: GraduationCap
  },
  {
    title: "AI For Everyone",
    organization: "DeepLearning.AI",
    credentialId: "EKLUV6CQHFDL",
    icon: GraduationCap
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    organization: "University of California, Santa Cruz",
    credentialId: "QAWML3H6CKBG",
    icon: GraduationCap
  },
  {
    title: "Python Data Structures",
    organization: "University of Michigan",
    credentialId: "J9XKY7RAX8WD",
    icon: GraduationCap
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    organization: "University of Michigan",
    credentialId: "TF288AN8XWJ7J",
    icon: GraduationCap
  }
];

export const Certifications = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  return (
    <Section
      id="certifications"
      title={t('certifications.title')}
      subtitle={t('certifications.subtitle')}
      variant={variant}
    >
      <div className="mb-8 flex items-center justify-center gap-3 text-primary">
        <Award className="w-8 h-8" />
        <h3 className="text-2xl font-semibold">{t('certifications.professionalCerts')}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <p className="text-primary font-medium flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {cert.organization}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
