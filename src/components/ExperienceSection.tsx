
import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "Semicolon Labs",
    period: "2024",
    responsibilities: [
      "Built scalable web apps with Spring Boot/React",
      "Developed RESTful APIs",
      "Maintained CI/CD pipelines",
      "Production debugging"
    ]
  },
  {
    role: "Software Engineering Trainee",
    company: "Semicolon Africa",
    period: "2023-2024",
    responsibilities: [
      "Employee Management app development",
      "Agile team collaboration",
      "Docker containerization",
      "AWS infrastructure with Terraform"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-portfolio-navy/30 py-12">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-8 space-y-8">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="experience-card animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-accent font-heading">{experience.role}</h3>
                  <p className="text-lg">{experience.company}</p>
                </div>
                <div className="bg-portfolio-dark rounded-full px-4 py-1 text-sm inline-block w-fit">
                  {experience.period}
                </div>
              </div>
              
              <ul className="mt-4 space-y-2">
                {experience.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
