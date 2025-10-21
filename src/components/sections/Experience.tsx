import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "PROXYM – IT, Sousse",
    period: "June – July 2025",
    description: "Built CoreAssurance, a web platform to manage clients, agencies, quotes, contracts, and insurance payments. Developed both frontend and backend for a smooth and user-friendly experience.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express" ,"REST APIs","chakra-ui"],
  },
  {
    title: "Full-Stack Development of a Medical AI Platform Intern",
    company: "Lab_Tim – Faculty of Medicine, Monastir",
    period: "July – September 2024",
    description: "Developed Medical Vision, a web-based platform for machine learning workflows on medical tabular data. Managed projects, dataset imports, preprocessing, model training, and result comparisons. Implemented visualizations to help understand dataset features and model performance.",
    technologies: ["React", "Python", "Flask","MySQL" ,"Chart.js", "Machine Learning"],
  },
  {
    title: "Data Engineering Intern",
    company: "TaDa Startup – Monastir",
    period: "June 2024",
    description: "Extracted, structured, and processed a large-scale Arabic-language tabular database from diverse sources. Automated data collection and preprocessing workflows, improving efficiency and accuracy.",
    technologies: ["Python", "Pandas"," BeautifulSoup","scrapy"],
  },
];



export const Experience = () => {
   // ✅ Hook pour activer l’animation reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100;
        if (inView) el.classList.add("active");
        else el.classList.remove("active");
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // active les sections visibles dès le départ

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;experience /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">History</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Building expertise through hands-on internships
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

        <div className="space-y-12">
  {experiences.map((exp, index) => (
    <div
      key={index}
      className="reveal"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="code-card p-6 md:p-8 group">
        {/* Timeline dot for larger screens */}
        <div className="hidden md:flex absolute -left-20 top-8 w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg items-center justify-center group-hover:bg-primary/30 transition-colors">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>

        <div className="flex flex-col gap-5">
          {/* Title & Company */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold mb-1 font-mono">
                {exp.title}
              </h3>
              <p className="text-primary font-medium font-mono">{exp.company}</p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              <span>{exp.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="bg-secondary/50 hover:bg-primary/20 hover:border-primary/40 transition-all font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="h-0.5 w-0 group-hover:w-full bg-gradient-primary transition-all duration-500" />
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};
