import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Database, 
  Cpu, 
  Award,
  BookOpen,
  Trophy
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const Skills = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      icon: Brain,
      title: t('skills.categories.aiML'),
      skills: ["Deep Learning", "Reinforcement Learning", "Neural Networks", "Computer Vision", "NLP", "Transfer Learning"]
    },
    {
      icon: Code2,
      title: t('skills.categories.programming'),
      skills: ["Python", "C", "JavaScript", "MATLAB", "SQL"]
    },
    {
      icon: Cpu,
      title: t('skills.categories.frameworks'),
      skills: ["PyTorch", "TensorFlow", "NVIDIA Isaac Lab", "Isaac Sim", "OpenCV", "scikit-learn"]
    },
    {
      icon: Database,
      title: t('skills.categories.dataScience'),
      skills: ["Data Preprocessing", "Statistical Analysis", "Model Optimization", "Predictive Modeling"]
    }
  ];

  const testScores = [
    {
      icon: Award,
      test: "IELTS (Academic)",
      score: "Overall: 7.0",
      breakdown: "L: 29, W: 27, S: 23, R: 30",
      date: "April 09, 2024"
    },
    {
      icon: Trophy,
      test: "GRE General Test",
      score: "Q: 168, V: 162, AW: 4.0",
      breakdown: "Quantitative: 168, Verbal: 162, Analytical Writing: 4.0",
      date: "August 30, 2023"
    }
  ];

  const languages = [
    { name: "English", level: "professional", flag: "🇬🇧" },
    { name: "Farsi", level: "native", flag: "🇮🇷" },
    { name: "Azerbaijani", level: "native", flag: "🇦🇿" },
    { name: "Turkish", level: "intermediate", flag: "🇹🇷" }
  ];
  
  return (
    <Section
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
      variant={variant}
    >
      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="p-6 shadow-elegant hover:shadow-lg-custom transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Test Scores */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">{t('skills.testScores')}</h3>
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {testScores.map((test, index) => (
            <Card
              key={index}
              className="p-6 shadow-elegant hover:shadow-lg-custom transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full gradient-accent">
                  <test.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">{test.test}</h4>
                  <p className="text-sm text-muted-foreground">{test.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">{test.score}</p>
                <p className="text-sm text-muted-foreground">{test.breakdown}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">{t('skills.languages')}</h3>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          {languages.map((lang) => (
            <Card
              key={lang.name}
              className="px-6 py-4 shadow-elegant hover:shadow-lg-custom transition-smooth hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <span className="font-medium text-foreground text-lg">{lang.name}</span>
                  <Badge variant="outline" className="ml-2">{t(`skills.proficiency.${lang.level}`)}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
