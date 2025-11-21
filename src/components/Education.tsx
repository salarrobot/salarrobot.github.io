import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, FileText, Award, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Education = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const education = [
    {
      degree: t('education.degrees.masters.degree'),
      institution: t('education.degrees.masters.institution'),
      location: t('education.degrees.masters.location'),
      period: t('education.degrees.masters.period'),
      gpa: t('education.degrees.masters.gpa'),
      thesis: t('education.degrees.masters.thesis'),
      supervisor: t('education.degrees.masters.supervisor'),
      description: t('education.degrees.masters.description')
    },
    {
      degree: t('education.degrees.bachelors.degree'),
      institution: t('education.degrees.bachelors.institution'),
      location: t('education.degrees.bachelors.location'),
      period: t('education.degrees.bachelors.period'),
      gpa: t('education.degrees.bachelors.gpa'),
      description: t('education.degrees.bachelors.description')
    }
  ];
  
  return (
    <Section
      id="education"
      title={t('education.title')}
      subtitle={t('education.subtitle')}
      variant={variant}
    >
      <div className="space-y-6 animate-fade-in">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <h3 className="text-2xl font-bold text-primary">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  {edu.institution}
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right">
                <div className="flex items-center gap-1 md:justify-end">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1 md:justify-end">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">{edu.description}</p>
              
              {edu.supervisor && (
                <div className="flex items-center gap-2 text-sm">
                  <User className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground">{t('education.supervisor')}:</span>
                  <span>{edu.supervisor}</span>
                </div>
              )}
              
              {edu.thesis && (
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground">{t('education.thesis')}:</span>
                  <span>{edu.thesis}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-accent" />
                <span className="font-semibold text-foreground">{t('education.gpa')}:</span>
                <span>{edu.gpa}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
