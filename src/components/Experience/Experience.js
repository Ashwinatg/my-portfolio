import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Credit Agricole Corporate Investment Bank (CACIB)",
      location: "Singapore",
      role: "Senior Java Developer",
      period: "Jan 2023 - Present",
      description: "Develop and maintain banking applications, run unit cases, deploy using CICD and production support",
      skills: [
        "Java", "Kubernetes", "GRPC", "GraphQL", "Microservices", "Asynchronous Event Architecture",
        "GitLab CI", "Kubernetes Deployment", "Automation Testing", "Production Support"
      ],
      responsibilities: [
        "Developed batch jobs deployed in kubernetes cluster",
        "Developed and maintained GRPC services to make data calls",
        "Design, Develop and Test GraphQL APIs for banking applications",
        "Built microservices using latest Java technologies for multiple UI clients",
        "Deploy services using GitLab CI and Kubernetes",
        "Written automation test cases for pipelines",
        "Worked on production issues"
      ]
    },
    {
      id: 2,
      company: "Dish Networks",
      location: "USA",
      role: "Developer", 
      period: "Feb 2021 - Jan 2023",
      description: "Development & Maintenance of several Batch jobs and in-house APIs and also dev support for deployment and post production issues",
      skills: [
        "Spring Boot", "PostgreSQL", "Maven", "REST API", "Redis Cache", "RabbitMQ",
        "JAX-RS", "Java 8", "SQL", "JavaScript", "Kafka", "Microservices"
      ],
      responsibilities: [
        "Developed REST Web Services using JAX-RS for providing data access to other modules",
        "Written Service to allow user to upload CSV file which gets validated and stored in database",
        "Owner of complex APIs involving multiple upstream and downstream systems",
        "Strong in SQL and Java 8 features",
        "Owns batch jobs involving complex workflows and lot of data",
        "Worked in plain JavaScript",
        "Worked on asynchronous Event processing using Kafka on Enterprise microservices"
      ]
    },
    {
      id: 3,
      company: "Publicis Sapient",
      location: "India",
      role: "Developer",
      period: "March 2018 - Feb 2021", 
      description: "Developed APIs and ETL development for Ecommerce order and catalog modules",
      skills: [
        "Spring Boot", "PostgreSQL", "Maven", "REST API", "Redis Cache", "RabbitMQ",
        "Jenkins", "CI-CD", "Spring Framework", "IOC", "AOP", "JUnit", "Java 8"
      ],
      responsibilities: [
        "Worked on ecommerce search development - catalog, order modules",
        "Developed ETL solutions using Java based frameworks", 
        "Developed Micro web services REST API in Spring Boot framework",
        "Experience in CI-CD with Jenkins and Maven build tools",
        "Used Spring framework to realize IOC and AOP and managed Java Beans",
        "Allows users to download excel export of data dynamically",
        "Written Service to allow user to upload CSV file validation and storage",
        "Create and execute test cases in JUnit for unit testing"
      ]
    },
    {
      id: 4,
      company: "Tata Consultancy Services",
      location: "Chennai",
      role: "Developer",
      period: "2015 - March 2018",
      description: "Java development with latest technologies for multiple ecommerce clients",
      skills: [
        "JSP", "HTML", "CSS", "AJAX", "JavaScript", "Oracle 12c", "DDL", "DML",
        "Spring Boot", "PostgreSQL", "Maven", "REST API", "Spring Framework", 
        "IOC", "AOP", "Authentication Service"
      ],
      responsibilities: [
        "Developed presentation layer using JSP, HTML, CSS, AJAX, JavaScript Tag libraries",
        "Worked on Oracle 12c database for storing and retrieving application data",
        "Created DDL, DML scripts to create tables and privileges",
        "Developed fillable PDFs via tracking web forms, upload and retrieve documents",
        "Users can view and edit files with data saved to database",
        "Solving issues found during testing phase for all modules",
        "Actively interacted with client on weekly basis for requirements and demos",
        "Developed Micro web services REST API in Spring Boot framework",
        "Developed authentication service using Spring Boot auth service"
      ]
    }
  ];

  const handleExperienceClick = (experience) => {
    setSelectedExperience(selectedExperience?.id === experience.id ? null : experience);
  };

  return (
    <section className="experience">
      <div className="experience-container">
        <h1>Work Experience</h1>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <div 
                className="experience-header"
                onClick={() => handleExperienceClick(exp)}
              >
                <div className="company-info">
                  <h2>{exp.company}</h2>
                  <h3>{exp.role}</h3>
                  <p className="period">{exp.period} | {exp.location}</p>
                  <p className="description">{exp.description}</p>
                </div>
                <div className="expand-icon">
                  {selectedExperience?.id === exp.id ? '▼' : '▶'}
                </div>
              </div>
              
              {selectedExperience?.id === exp.id && (
                <div className="experience-details">
                  <div className="skills-section">
                    <h4>Technologies & Skills Used</h4>
                    <div className="skills-grid">
                      {exp.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="responsibilities-section">
                    <h4>Key Responsibilities</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;