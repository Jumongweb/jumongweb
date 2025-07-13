
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    title: "Wiiibi Energy Solar System",
    description: "Wiibi Energy is a full‑service solar‑technology company headquartered at 1 Olaoluwa Street, Off Adebowale Road, Ojodu, Lagos. From rooftop panels to whole‑home backup, we design, install, and maintain turn-key energy systems that keep you powered 24/7. No generators, just pure sunshine and smart engineering.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&auto=format",
    demo: "https://wiibi-energy.netlify.app/",
    featured: true
  },
  {
    title: "Meedl",
    description: "A fintech platform addressing financial barriers by providing inclusive financing solutions to help people acquire skills and achieve their goals. Connecting learners, organizations, and donors to fuel Africa's potential.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Hexagonal Architecture"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
    demo: "https://meedl.africa",
    featured: true
  },
  {
    title: "Employee Management Application",
    description: "A comprehensive employee management system with API design and authentication focus.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format",
    github: "https://github.com/Jumongweb/employeeManagementSystem",
    featured: true
  },
  {
    title: "Client-Specialist Matchmaking App",
    description: "Capstone project focused on connecting clients with specialists using Java/Spring Boot/PostgreSQL.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
    demo: "https://quagga-inky.vercel.app/",
    featured: true
  },
  {
    title: "Fitness Microservice",
    description: "A backend microservice application designed for fitness tracking and management with scalable architecture.",
    technologies: ["Java", "Spring Boot", "Microservices", "REST API"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
    github: "https://github.com/Jumongweb/fitness_microservice",
    featured: true
  },
  {
    title: "Spark",
    description: "Spark is an intelligent chat application powered by Google's Gemini AI, designed to provide insightful responses with citation support.",
    technologies: ["React", "Spring Boot", "Java", "API Integration"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format",
    github: "https://github.com/Jumongweb/Spark",
    featured: true
  },
  {
    title: "Pagaclone",
    description: "A clone of Paga's financial services platform, replicating the payments ecosystem that helps consumers and sellers pay, get paid, and access financial services across Africa.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format",
    github: "https://github.com/Jumongweb/pageClone",
    demo: "https://pagaclonebyjumong.netlify.app/",
    featured: true
  }
];

const ProjectsSection = () => {
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

  return (
    <section ref={sectionRef} id="projects" className="py-12">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          Explore some of the projects I've worked on, showcasing my technical skills and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "project-card border-border overflow-hidden transition-all duration-700 transform",
                isVisible 
                  ? "animate-slide-in opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ 
                animationDelay: isVisible ? `${index * 200}ms` : '0ms',
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <h3 className="text-xl font-bold font-heading">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-portfolio-dark px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} className="mr-1" />
                      Source Code
                    </a>
                  </Button>
                )}
                
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
