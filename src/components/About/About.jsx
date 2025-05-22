import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <h3 className="about-subtitle">Full Stack Developer</h3>
            <p className="about-description">
              I'm a passionate full-stack developer with experience in creating 
              modern web applications. I love turning ideas into reality through 
              clean, efficient code and intuitive user experiences.
            </p>
            <p className="about-description">
              With expertise in both frontend and backend technologies, I enjoy 
              working on challenging projects that push the boundaries of what's 
              possible on the web. I'm always eager to learn new technologies 
              and improve my skills.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="/resume.pdf" className="btn btn-secondary" download>
                Download CV
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/api/placeholder/400/500" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;