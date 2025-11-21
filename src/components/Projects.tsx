import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork, Calendar, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/salarrobot/repos?sort=updated&per_page=4');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return (
      <Section
        id="projects"
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
        variant="muted"
      >
        <div className="text-center text-muted-foreground">{t('projects.loading')}</div>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
      variant="muted"
    >
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            className="p-8 shadow-elegant hover:shadow-lg-custom transition-smooth hover:scale-[1.01] flex flex-col h-full border-l-4 border-primary"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Github className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">
                    {repo.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {t('projects.updated')} {format(new Date(repo.updated_at), "MMM d, yyyy")}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-foreground mb-4 flex-grow leading-relaxed">
              {repo.description || "No description available"}
            </p>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{t('projects.technologies')}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs px-3 py-1">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4 p-4 bg-muted/30 rounded-lg">
              {repo.language && (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{repo.language}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-2">
                <GitFork className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{repo.forks_count}</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-border">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
              >
                <Github className="h-4 w-4" />
                {t('projects.viewRepo')}
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-accent hover:underline transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('projects.liveDemo')}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8 animate-fade-in">
        <Button
          asChild
          size="lg"
          className="shadow-elegant hover:shadow-lg-custom transition-smooth"
        >
          <a
            href="https://github.com/salarrobot?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            {t('projects.viewMore')}
          </a>
        </Button>
      </div>
    </Section>
  );
};