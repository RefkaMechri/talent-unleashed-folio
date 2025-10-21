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
  
  const allTechnologies = ["All", ...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;projects /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Solutions built with modern tech and best practices
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {allTechnologies.slice(0, 5).map((tech, index) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`
                px-4 py-2 rounded font-mono text-xs transition-all
                ${filter === tech 
                  ? 'bg-primary text-primary-foreground shadow-glow' 
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground border border-primary/20 hover:border-primary/40'
                }
              `}
            >
              {filter === tech && <span className="mr-2">▸</span>}
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="code-card overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary/50 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 font-mono text-xs" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 font-mono text-xs" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                </div>

                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-primary transition-all duration-500 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
