import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Brain, Activity, Layers, Map, Eye, Bot, Cog } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Research = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const interests = [
    { key: "rlDeepRL", icon: Activity },
    { key: "robotics", icon: Layers },
    { key: "slam", icon: Map },
    { key: "ros2", icon: Cog },
    { key: "machineLearning", icon: Brain },
    { key: "computerVision", icon: Eye },
    { key: "llms", icon: Bot }
  ];
  
  return (
    <Section
      id="research"
      title={t('research.title')}
      subtitle={t('research.subtitle')}
      variant={variant}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in" data-i18n>
        {interests.map((interest) => {
          const Icon = interest.icon;
          return (
            <Card
              key={interest.key}
              className="p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border/50 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {t(`research.interests.${interest.key}`)}
              </h3>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
