import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Competitions } from "@/components/sections/Competitions";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  useEffect(() => {
    // Add custom cursor styles
    document.body.style.cursor = "none";
    
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="scroll-smooth relative">
      <ParticlesBackground />
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Competitions />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
