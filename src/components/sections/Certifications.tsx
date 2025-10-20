import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import certif1 from "@/assets/certif1.pdf";
import certif2 from "@/assets/certif2.pdf";
import certif3 from "@/assets/certif3.pdf";
import certif4 from "@/assets/certif4.pdf";
import certif5 from "@/assets/certif5.pdf";
import certif6 from "@/assets/certif6.pdf";

const certifications = [
  {
    title: "Cloud Operations",
    issuer: "Amazon Web Services",
    date: "2025",
    verified: true,
    ImgPdf: certif1,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "DevOPS Essentials",
    issuer: "Microsoft",
    date: "2025",
    verified: true,
    ImgPdf: certif2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    verified: true,
    ImgPdf: certif3,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Docker Essentials",
    issuer: "DataScientist.fr",
    date: "2025",
    verified: true,
    ImgPdf: certif4,
    color: "from-primary to-blue-500",
  },
  {
    title: "Application of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "2024",
    verified: true,
    ImgPdf: certif5,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    date: "2024",
    verified: true,
    ImgPdf: certif6,
    color: "from-blue-500 to-indigo-500",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              &lt;certifications /&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Credentials</span> & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-mono">
            Validated skills through professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="code-card p-6 group cursor-pointer transition-all duration-500 hover:scale-105 hover:border-l-8"
                onClick={() => window.open(cert.ImgPdf, "_blank")}
                title="Click to view certificate"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  {cert.verified && (
                    <CheckCircle2 className="h-5 w-5 text-primary ml-auto" />
                  )}
                </div>

                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground font-mono mb-1">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline" className="text-xs font-mono border-primary/30">
                    {cert.date}
                  </Badge>
                </div>
                
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${cert.color} transition-all duration-700 rounded-full mt-4`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
