
import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Backend",
    skills: ["Java (Spring Boot)", "Python (Django)", "Node.js (Express)", "Go"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript/TypeScript"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Architecture",
    skills: ["Hexagonal", "Microservices", "N-Tier"]
  },
  {
    title: "DevOps",
    skills: ["Terraform", "GitHub Actions", "CI/CD pipelines"]
  },
  {
    title: "Testing",
    skills: ["JUnit", "Jest", "Postman"]
  },
  {
    title: "Monitoring",
    skills: ["Portalner", "Grafana", "Prometheus"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mt-4">
          My technical toolkit spans across various domains of software engineering, 
          enabling me to build complete, efficient systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillsData.map((category, idx) => (
            <div 
              key={category.title}
              className="skill-card animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 font-heading">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
