import { useEffect } from 'react';
import './About.css';
// import myPhoto from './assets/viber_image_2025-05-22_15-44-43-982.jpg'; // adjust path if needed
import myPhoto from "../../assets/viber_image_2025-05-22_15-44-43-982.jpg";


const About = () => {
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

    const elements = document.querySelectorAll('.about-content, .about-image');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">
            <span className="title-number">01.</span> About Me
          </h2>
          <p className="about-text">
            I'm a passionate frontend developer with expertise in creating
            beautiful, responsive, and user-friendly web applications. With a
            strong foundation in React, JavaScript, and modern CSS, I bring
            designs to life with attention to detail and performance.
          </p>
          <p className="about-text">
            My journey in web development started several years ago, and since
            then I've worked on various projects ranging from small business
            websites to complex web applications.
          </p>
          <div className="skills-list">
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5</li>
            </ul>
            <ul>
              <li>CSS3/Sass</li>
              <li>Git</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-overlay"></div>
            <div className="image-placeholder">
              <img src={myPhoto} alt="My Profile" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;