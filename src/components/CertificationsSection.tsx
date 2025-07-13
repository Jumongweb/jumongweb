
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  type: 'appreciation' | 'completion' | 'achievement';
}

const certificationsData: Certification[] = [
  {
    title: "Certificate of Appreciation",
    issuer: "Professional Recognition",
    date: "2025",
    description: "Recognition for outstanding contributions and professional excellence in software development.",
    link: "https://drive.google.com/file/d/1CuGUoJUvzelOI5N42vgkr4CD4ORh-wA0/view?usp=sharing",
    type: "appreciation"
  },
  {
    title: "MERN Stack Certification",
    issuer: "Google",
    date: "2025",
    description: "Comprehensive certification in MongoDB, Express.js, React, and Node.js full-stack development.",
    link: "https://drive.google.com/file/d/1__j1UEVnCtMLDDCpCYpagOTpYmWwseL1/view?usp=sharing",
    type: "completion"
  },
  {
    title: "MERN Stack Certification",
    issuer: "Microsoft",
    date: "2025",
    description: "Advanced MERN stack development certification covering modern full-stack JavaScript technologies.",
    link: "https://drive.google.com/file/d/1rn2em0yx9dHBX5g5sZ80XokYRlm09IN6/view?usp=sharing",
    type: "completion"
  }
];

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getTypeIcon = (type: string) => {
    return <Award className="w-5 h-5 text-accent" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appreciation':
        return 'border-accent/20 hover:border-accent/40';
      case 'completion':
        return 'border-primary/20 hover:border-primary/40';
      case 'achievement':
        return 'border-green-500/20 hover:border-green-500/40';
      default:
        return 'border-border hover:border-primary/40';
    }
  };

  return (
    <section ref={sectionRef} id="certifications" className="py-12">
      <div className="section-container">
        <h2 className="section-title">Certifications & Recognition</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          Professional certifications and recognitions that validate my expertise and commitment to excellence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {certificationsData.map((cert, index) => (
            <Card 
              key={index} 
              className={cn(
                "transition-all duration-700 transform border-2",
                getTypeColor(cert.type),
                "hover:shadow-lg hover:-translate-y-1",
                isVisible 
                  ? "animate-slide-in opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ 
                animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getTypeIcon(cert.type)}
                    <div>
                      <h3 className="text-lg font-bold font-heading">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-portfolio-navy px-2 py-1 rounded text-accent">
                    {cert.date}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full hover:bg-accent hover:text-black transition-colors"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-2" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {certificationsData.length === 1 && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              More certifications coming soon...
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
