import React, { useState } from 'react';
import { Github, ExternalLink, Brain, Image, MessageSquare, TrendingUp } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 2,
      title: "Edge-Based Forest Fire Detection and Alerting System Using Machine Learning and YOLOv8 on Raspberry Pi",
      description: "Developed a real-time object detection and tracking system for industrial automation using YOLO and OpenCV with 98% detection accuracy.",
      icon: Image,
      tech: ["Python", "YOLOv8n", "LORa module","GPS module","RaspberryPI"],
      // github: "https://github.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      category: "Computer Vision"
    },
    {
      id: 3,
      title: "Prediction of Hereditary Disease Risk Using Hidden Markov Model in Machine Learning",
      description: "Trained hidden markov model using synthetic data of DNA sequences and predicted hereditary disease based on the cpg islands and GC content.It was hard to get the data due to medical restrictions.",
      icon: MessageSquare,
      tech: ["Python", "hmmlearn"],
      // github: "https://github.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      category: "NLP"
    },
    {
      id: 4,
      title: "Predictive Analytics Dashboard",
      description: "Designed a comprehensive dashboard for sales forecasting using ensemble methods and time series analysis with interactive visualizations.",
      icon: TrendingUp,
      tech: ["Python", "Plotly", "Scikit-learn", "Streamlit"],
      github: "https://github.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      category: "Data Science"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovative AI and ML solutions that solve real-world problems
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay"></div>
                <div className="project-icon">
                  <project.icon size={24} />
                </div>
                <div className="project-category">
                  {project.category}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                 
                  {/* <a href={project.github} className="project-link"> */}
                     <a  className="project-link">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a href="https://github.com" className="view-all-btn">
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
