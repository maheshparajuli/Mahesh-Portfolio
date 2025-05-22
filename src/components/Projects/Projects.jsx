import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const projectsRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Separate effect for animating cards when visible and filteredProjects change
  useEffect(() => {
    if (isVisible) {
      // Animate cards with staggered delay
      setTimeout(() => {
        filteredProjects.forEach((project, index) => {
          setTimeout(() => {
            setVisibleCards(prev => new Set([...prev, project.id]));
          }, index * 150);
        });
      }, 300);
    }
  }, [isVisible, filteredProjects]);

  useEffect(() => {
    // Reset and animate cards when filter changes
    setVisibleCards(new Set());
    const timer = setTimeout(() => {
      filteredProjects.forEach((project, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, project.id]));
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilter, filteredProjects]);

  const handleFilterChange = (filterId) => {
    if (filterId !== activeFilter) {
      // Add exit animation class
      document.querySelector('.projects-grid').classList.add('filtering');
      
      setTimeout(() => {
        setActiveFilter(filterId);
        document.querySelector('.projects-grid').classList.remove('filtering');
      }, 300);
    }
  };

  const ProjectCard = ({ project, index }) => {
    const isCardVisible = visibleCards.has(project.id);
    
    return (
      <div 
        className={`project-card ${isCardVisible ? 'visible' : ''}`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-links">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <span className="link-icon">🚀</span>
                Live Demo
              </a>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <span className="link-icon">💻</span>
                GitHub
              </a>
            </div>
          </div>
          <div className="card-shine"></div>
        </div>
        
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-technologies">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="tech-tag"
                style={{ animationDelay: `${(index * 100) + (techIndex * 50)}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="card-border"></div>
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <div className={`projects-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="section-title">
            <span className="title-text">My Projects</span>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className={`project-filters ${isVisible ? 'animate' : ''}`}>
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.id)}
              style={{ animationDelay: `${400 + (index * 100)}ms` }}
            >
              <span className="filter-text">{filter.label}</span>
              <div className="filter-bg"></div>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className={`projects-cta ${isVisible ? 'animate' : ''}`}>
          <div className="cta-content">
            <p className="cta-text">Want to see more of my work?</p>
            <a 
              href="https://github.com/username" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="btn-text">View All on GitHub</span>
              <div className="btn-shine"></div>
            </a>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="bg-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;