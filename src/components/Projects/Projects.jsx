import { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A full-featured e-commerce platform with product listings, cart functionality, and user authentication.',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: 'project1.jpg',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
      tags: ['React', 'Firebase', 'Material UI', 'Drag & Drop'],
      image: 'project2.jpg',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Real-time weather information with 5-day forecast, location search, and interactive charts.',
      tags: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
      image: 'project3.jpg',
    },
  ]);

  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = ['All', 'React', 'Node.js', 'Firebase', 'API Integration'];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter, projects]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => projectCards.forEach((card) => observer.unobserve(card));
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-number">02.</span> My Projects
        </h2>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder"></div>
                <div className="project-overlay">
                  <a
                    href="#"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;