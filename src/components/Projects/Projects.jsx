import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application built with React and Firebase. Real-time updates and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "CSS3"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts using OpenWeatherMap API.",
      image: "/api/placeholder/400/300",
      technologies: ["JavaScript", "CSS3", "API"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 4,
      title: "Blog REST API",
      description: "A RESTful API for a blog application with authentication, CRUD operations, and data validation.",
      image: "/api/placeholder/400/300",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "CSS3", "JavaScript"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "A full-stack social media application with real-time messaging, post sharing, and user profiles.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/project"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/username" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;