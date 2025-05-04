
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const techIcons = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'React', icon: '⚛️' },
  { name: 'Spring Boot', icon: '🍃' },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#3563E9_0%,transparent_25%)] opacity-20" />
      
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Lawal Toheeb <span className="text-accent">Olabanji</span>
            <span className="block mt-2">Software Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-6 max-w-lg">
            Building scalable applications across the full stack
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {techIcons.map((tech, index) => (
              <div 
                key={tech.name}
                className="bg-portfolio-navy px-3 py-1.5 rounded-md text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="mr-1.5">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex flex-row gap-4 flex-wrap sm:flex-nowrap">
            <Button asChild size="default" className="group min-w-36">
              <a href="#projects">
                View My Work
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="default" asChild className="min-w-36">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="mt-10 flex space-x-4">
            <a 
              href="https://github.com/Jumongweb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/lawal-toheeb-008b7b207" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in animate-delay-300">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden border-4 border-portfolio-navy">
              <img 
                src="https://i.postimg.cc/MZ9ZvVSg/me.jpg" 
                alt="Lawal Toheeb" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary px-4 py-2 rounded-lg shadow-lg">
              <span className="font-medium">Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
