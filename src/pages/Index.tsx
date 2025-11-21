import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About variant="muted" />
        <Research />
        <Education variant="muted" />
        <Experience />
        <Skills variant="muted" />
        <Projects />
        <Publications variant="muted" />
        <Certifications />
        <Contact variant="muted" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
