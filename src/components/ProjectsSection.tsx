
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

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
    title: "Employee Management Application",
    description: "A comprehensive employee management system with API design and authentication focus.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format",
    github: "https://github.com/Jumongweb",
    featured: true
  },
  {
    title: "Client-Specialist Matchmaking App",
    description: "Capstone project focused on connecting clients with specialists using Java/Spring Boot/PostgreSQL.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format",
    github: "https://github.com/Jumongweb",
    featured: true
  },
  {
    title: "Containerized Application Deployment",
    description: "Docker implementation with horizontal scaling capabilities for cloud deployment.",
    technologies: ["Docker", "Terraform", "AWS", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&auto=format",
    github: "https://github.com/Jumongweb"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          Explore some of the projects I've worked on, showcasing my technical skills and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="project-card border-border overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
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
