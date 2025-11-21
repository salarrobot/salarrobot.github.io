import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Experience = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      type: "internship",
      key: "erc",
      technologies: ["NVIDIA Isaac Lab", "Isaac Sim", "PPO", "Reinforcement Learning", "Deep RL"]
    },
    {
      type: "internship",
      key: "sobh",
      employmentType: t('experience.employmentType'),
      technologies: ["Natural Language Processing", "Deep Learning", "Computer Vision", "CNN", "Object Detection"]
    },
    {
      type: "teaching",
      key: "ta"
    }
  ];
  
  return (
    <Section
      id="experience"
      title={t('experience.title')}
      subtitle={t('experience.subtitle')}
      variant={variant}
    >
      <div className="space-y-8 animate-fade-in" data-i18n>
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg gradient-primary">
                {exp.type === "internship" ? (
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                ) : (
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {t(`experience.experiences.${exp.key}.title`)}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-2">
                  {t(`experience.experiences.${exp.key}.organization`)}
                  {exp.employmentType && (
                    <Badge variant="secondary" className="ml-2">
                      {exp.employmentType}
                    </Badge>
                  )}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{t(`experience.experiences.${exp.key}.period`)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{t(`experience.experiences.${exp.key}.location`)}</span>
                  </div>
                  {t(`experience.experiences.${exp.key}.duration`, { defaultValue: '' }) && (
                    <Badge variant="outline">
                      {t(`experience.experiences.${exp.key}.duration`)}
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t(`experience.experiences.${exp.key}.description`)}
              </p>

              {exp.technologies && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {t(`experience.experiences.${exp.key}.highlights`, { returnObjects: true, defaultValue: [] }) && 
               Array.isArray(t(`experience.experiences.${exp.key}.highlights`, { returnObjects: true, defaultValue: [] })) &&
               (t(`experience.experiences.${exp.key}.highlights`, { returnObjects: true, defaultValue: [] }) as string[]).length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{t('experience.highlights')}:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {(t(`experience.experiences.${exp.key}.highlights`, { returnObjects: true }) as string[]).map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {t(`experience.experiences.${exp.key}.courses`, { returnObjects: true, defaultValue: [] }) && 
               Array.isArray(t(`experience.experiences.${exp.key}.courses`, { returnObjects: true, defaultValue: [] })) &&
               (t(`experience.experiences.${exp.key}.courses`, { returnObjects: true, defaultValue: [] }) as any[]).length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">{t('experience.courses')}:</h4>
                  <div className="space-y-3">
                    {(t(`experience.experiences.${exp.key}.courses`, { returnObjects: true }) as any[]).map((course, idx) => (
                      <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                        <p className="font-medium text-foreground">{course.name}</p>
                        <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                          <span>{course.period}</span>
                          <span>•</span>
                          <span>{t('experience.lecturer')}: {course.lecturer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
