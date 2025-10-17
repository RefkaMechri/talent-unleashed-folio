import { Code2, Rocket, Users, Zap, Book } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  { icon: Code2, title: "Software Engineering", description: "Developing high-quality, scalable applications" },
  { icon: Users, title: "Collaboration", description: "Working seamlessly with teams to bring projects to life" },
  { icon: Rocket, title: "Creative Innovation", description: "Turning bold ideas into practical, high-impact solutions" },
  { icon: Zap, title: "Optimized Performance", description: "Ensuring every project runs efficiently and reliably" },
];

const learningPath = [
  { icon: Book, title: "ISIMM – Software Engineering Cycle", year: "2023 - Present", description: "3rd year in Software Engineering, exploring AI, Full-Stack Development, and modern frameworks" },
  { icon: Book, title: "ISIMM – Integrated Preparatory Cycle", year: "2021 - 2023", description: "Graduated with honors, laying the foundation for my tech journey" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about technology and innovation, I craft solutions that make a real impact.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-500">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xl">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mb-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
           Education <span className="gradient-text"> & </span>Growth
          </h3>

          <div className="flex flex-col gap-8">
            {learningPath.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Dot */}
                <div className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex-shrink-0"></div>
                
                {/* Card */}
                <Card className="p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-md w-full">
                  <div className="flex items-center mb-2">
                    <item.icon className="h-5 w-5 text-gradient-primary mr-2" />
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bio Card */}
        <motion.div
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Highly motivated and versatile engineer, passionate about creating solutions that solve complex problems. I combine creativity with a collaborative mindset to deliver meaningful results.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Always eager to learn and adapt, I thrive in fast-paced environments where innovation meets efficiency. Committed to excellence and driven to contribute to impactful projects that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
