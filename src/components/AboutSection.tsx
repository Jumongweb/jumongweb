
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    institution: "Semicolon Africa",
    degree: "Diploma in Software Engineering",
    period: "2023-2024",
    icon: "🎓"
  },
  {
    institution: "Henley Business School",
    degree: "Diploma in Entrepreneurship",
    period: "2023-2024",
    icon: "💼"
  },
  {
    institution: "The Polytechnic Ibadan",
    degree: "HND in Public Administration",
    period: "2019-2022",
    icon: "🏛️"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-portfolio-navy/30 py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <p className="text-lg leading-relaxed">
              Skilled software engineer with proven expertise in building scalable applications across the full stack. 
              Combines strong technical capabilities in Java, Python, and JavaScript ecosystems with architecture design 
              and cloud deployment skills.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Passionate about creating efficient, maintainable systems through modern development practices.
              I thrive in collaborative environments and enjoy solving complex problems with elegant solutions.
            </p>
            
            <div className="mt-8">
              <Button asChild variant="outline">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">Education</h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{item.institution}</h4>
                        <p className="text-muted-foreground">{item.degree}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
