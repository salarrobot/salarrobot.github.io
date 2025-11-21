import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

export const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  variant = "default" 
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 px-4 md:px-8",
        variant === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center animate-fade-in">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
