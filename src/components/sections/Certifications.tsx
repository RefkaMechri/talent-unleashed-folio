import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  },
  {
    title: "DevOPS Essentials",
    issuer: "Microsoft",
    date: "2025",
    verified: true,
    ImgPdf: certif2,
  },
  {
    title: "Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    verified: true,
    ImgPdf: certif3,
  },
  {
    title: "Docker Essentials",
    issuer: "DataScientist.fr",
    date: "2025",
    verified: true,
    ImgPdf: certif4,
  },
  {
    title: "Application of AI for Predictive Maintenance",
    issuer: "NVIDIA",
    date: "2024",
    verified: true,
    ImgPdf: certif5,
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    date: "2024",
    verified: true,
    ImgPdf: certif6,
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Official certifications and accredited training programs I’ve completed.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover-glow group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => window.open(cert.ImgPdf, "_blank")}
              title="Click to view certificate"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                {cert.verified && (
                  <CheckCircle2 className="h-5 w-5 text-accent ml-auto" />
                )}
              </div>

              <h3 className="text-lg font-display font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-sm text-primary font-medium mb-1">
                {cert.issuer}
              </p>

              <div className="flex items-center justify-between mt-4">
                <Badge variant="outline" className="text-xs">
                  {cert.date}
                </Badge>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
