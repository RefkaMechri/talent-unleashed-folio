import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import pharmaImg from "@/assets/pharma.png"; 
import epilepImg from "@/assets/epilepTrack.png"; 
import fungiImage from "@/assets/fungi.png";
import ISIMMImage from "@/assets/ISIMM.png";


const projects = [
{
  title: "PharmaLab – Fattouma Bourguiba Hospital",
  description: "Desktop application automating clinical decision-making with AI-driven predictive models. Recommends optimal drug dosages and provides healthcare professionals with an intuitive interface to manage patient treatments.",
  technologies: ["Python", "electron.js","Machine Learning", "Desktop App", "AI", "Healthcare"],
  image: pharmaImg ,
  github: "https://github.com/RefkaMechri/PharmaLab",
  demo: "https://demo.com",
},


  {
    title: "EpilepTrack",
  description: "An AI-powered platform that assists non-specialists in interpreting EEG signals, developed in collaboration with doctors at Sahloul Hospital, and enabling remote validation by a neurophysiologist.",
    technologies: ["React.js", "Flask", "MySQL", "Machine Learning", "AI", "Healthcare"],
    image: epilepImg,
    github: "https://github.com/RefkaMechri/epilepTrack",
    demo: "https://demo.com",
  },
  {
    title: "FungiScan ",
    description: "FungiScan AI is an innovative AI-based solution designed to automatically detect fungal diseases affecting crops. Using computer vision and machine learning, the system can analyze plant images captured via drones, smartphones, or emedded sensors to identify infections and recommend precise actions.",
 technologies: [
      "Python",
      "TensorFlow / PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Flask",
      "React.js",
    ],   
     image: fungiImage,
    github: "https://github.com/RefkaMechri/FungiScan-AI",
    demo: "https://drive.google.com/drive/u/2/folders/1CnIGGxvr7ubnRcycVZSCyS-Tq3arf79E",
  },
  {
    title: "ISIMM Website",
    description: "The ISIMM website is an online platform dedicated to education, training, and professional development. It provides comprehensive information on training programs, educational resources, and events organized by the institute.",
    technologies: ["React.js", "Tailwind", "Node.js","MySQL"],
    image: ISIMMImage,
    github: "https://github.com/RefkaMechri/isimm?tab=readme-ov-file",
    demo: "https://github.com/RefkaMechri/isimm?tab=readme-ov-file",
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  
  // Only 3 main filters
  const mainFilters = ["All", "AI & Machine Learning", "Web Development"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => {
        if (filter === "AI & Machine Learning") {
          return p.technologies.some(tech => 
            ["Machine Learning", "AI", "TensorFlow / PyTorch", "OpenCV"].includes(tech)
          );
        }
        if (filter === "Web Development") {
          return p.technologies.some(tech => 
            ["React.js", "Flask", "Node.js", "electron.js", "Tailwind"].includes(tech)
          );
        }
        return true;
      });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ideas <span className="gradient-text">in</span> action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
           A glimpse into my creations and experiments          </p>
        </div>

        {/* Simplified 3 Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {mainFilters.map((filterName, index) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`
                group relative px-8 py-4 rounded-2xl font-bold text-base
                transition-all duration-500 ease-out
                ${filter === filterName 
                  ? 'bg-gradient-tech text-white shadow-glow scale-110' 
                  : 'bg-card/60 text-muted-foreground hover:text-foreground border-2 border-primary/40 hover:border-primary/70 hover:scale-105'
                }
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Animated background on hover */}
              {filter !== filterName && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-tech opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              )}
              
              {/* Icon indicator */}
              <span className="relative z-10 flex items-center gap-3">
                {filter === filterName && (
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                )}
                {filterName}
              </span>
              
              {/* Bottom glow effect */}
              {filter === filterName && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-tech blur-md" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="glass-card overflow-hidden group perspective-1000 border-2 border-primary/20 hover:border-primary/40 transition-all duration-700 hover:shadow-glow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                
                {/* Floating icon */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-tech rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-glow">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-8 relative">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/60 text-sm px-3 py-1 hover:bg-gradient-tech hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-secondary/60 text-sm px-3 py-1">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 border-2 hover:border-primary hover:bg-primary/10" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      Code
                    </a>
                  </Button>
                  <Button size="lg" className="flex-1 bg-gradient-tech hover:shadow-glow" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
