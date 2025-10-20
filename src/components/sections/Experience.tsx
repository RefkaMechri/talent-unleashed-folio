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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
Explore My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           Building expertise across multiple impactful internships
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
      <Card className="relative glass-card p-6 md:p-10 rounded-2xl backdrop-blur-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-500 group">
        {/* Timeline dot for larger screens */}
        <div className="hidden md:flex absolute -left-20 top-8 w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full items-center justify-center shadow-lg">
          <Briefcase className="h-6 w-6 text-white" />
        </div>

        <div className="flex flex-col gap-5">
          {/* Title & Company */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-semibold mb-1 group-hover:text-gradient-primary transition-all">
                {exp.title}
              </h3>
              <p className="text-primary font-medium text-lg">{exp.company}</p>
            </div>

        <div className="flex items-center gap-2 text-muted-foreground bg-secondary/20 px-4 py-2 rounded-full whitespace-nowrap">
  <Calendar className="h-4 w-4" />
  <span className="text-sm font-medium">{exp.period}</span>
</div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3">
            {exp.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="secondary"
                className="bg-secondary/30 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white transition-all cursor-pointer"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};
