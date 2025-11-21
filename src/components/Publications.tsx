import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Presentation } from "lucide-react";
import { useTranslation } from "react-i18next";
import pythonWebinarImg from "@/assets/python-webinar.png";

const publications = [
  {
    title: "Transfer learning-based face mask detection system",
    venue: "The 9th Advanced Engineering Days (AED)",
    institution: "Mersin University",
    date: "July 9, 2024",
    type: "Conference Paper",
    category: "paper"
  },
  {
    title: "Python Webinar",
    venue: "LecturerBy",
    institution: "Online Webinar",
    date: "July 2, 2022",
    type: "Talk",
    category: "talk",
    image: pythonWebinarImg,
    link: "#"
  }
];

export const Publications = ({ variant = "default" }: { variant?: "default" | "muted" }) => {
  const { t } = useTranslation();
  
  return (
    <Section
      id="publications"
      title={t('publications.title')}
      subtitle={t('publications.subtitle')}
      variant={variant}
    >
      <div className="space-y-6 animate-fade-in">
        {publications.map((pub, index) => (
          <Card
            key={index}
            className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth hover:scale-[1.01]"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {pub.image && (
                <div className="md:w-48 flex-shrink-0">
                  <img 
                    src={pub.image} 
                    alt={pub.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {pub.category === 'talk' ? (
                    <Presentation className="h-5 w-5 text-accent" />
                  ) : (
                    <FileText className="h-5 w-5 text-accent" />
                  )}
                  <Badge variant="secondary">{pub.type}</Badge>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-3">
                  {pub.title}
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-lg font-semibold">{pub.venue}</p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm">{pub.institution}</span>
                  </p>
                  <p className="text-sm">{pub.date}</p>
                </div>
              </div>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-smooth"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="text-sm font-semibold">
                    {pub.category === 'talk' ? t('publications.viewEvent') : t('publications.viewPaper')}
                  </span>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
