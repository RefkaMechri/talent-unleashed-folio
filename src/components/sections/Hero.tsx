import { ArrowDown, Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/Typewriter";
import heroImage from "@/assets/hero-bg.jpg";
import cv from "@/assets/cv.pdf";

export const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="animate-slide-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                &lt;developer /&gt;
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Software Engineer
              <span className="gradient-text block mt-2 font-mono">
                <Typewriter
                  texts={[
                    "{ Code. Create. Deploy. }",
                    "while(alive) { learn(); }",
                    "if (idea) { build(); }",
                    "function innovate() {...}",
                  ]}
                />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-mono">
              Building scalable solutions with clean code and modern tech
            </p>
          </div>

          {/* Buttons */}
          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-glow transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let’s Connect
            </Button>

            <Button
              size="lg"
              onClick={openCV}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Briefcase className="mr-2 h-5 w-5" />
             View My Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="animate-slide-up flex gap-6 justify-center"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://github.com/RefkaMechri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/refka-mechri-4377a2274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ref.kaa2002@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
