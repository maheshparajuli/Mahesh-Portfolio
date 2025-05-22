import { useEffect } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', level: 95, icon: 'html5' },
  { name: 'CSS3', level: 90, icon: 'css3' },
  { name: 'JavaScript', level: 85, icon: 'javascript' },
  { name: 'React', level: 80, icon: 'react' },
  { name: 'Node.js', level: 75, icon: 'nodejs' },
  { name: 'Git', level: 85, icon: 'git' },
  { name: 'Sass', level: 80, icon: 'sass' },
  { name: 'Responsive Design', level: 90, icon: 'responsive' },
];

const Skills = () => {
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

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar) => observer.observe(bar));

    return () => skillBars.forEach((bar) => observer.unobserve(bar));
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="title-number">03.</span> My Skills
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-info">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                  data-level={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;