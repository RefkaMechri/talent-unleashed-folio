import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Certification React Avancé",
    issuer: "Meta",
    date: "2024",
    credential: "ABC123456",
    verified: true,
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credential: "AWS-987654",
    verified: true,
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    credential: "FCC-789012",
    verified: true,
  },
  {
    title: "UI/UX Design Professional",
    issuer: "Google",
    date: "2023",
    credential: "GOOGLE-456789",
    verified: true,
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "HackerRank",
    date: "2023",
    credential: "HR-123789",
    verified: true,
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    date: "2023",
    credential: "IBM-234567",
    verified: true,
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Attestations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mes certifications professionnelles et formations validées
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-card p-6 hover-glow group"
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
                <span className="text-xs text-muted-foreground font-mono">
                  {cert.credential}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
