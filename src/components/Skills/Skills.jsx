import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 75 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 70 }
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-content">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-additional">
          <h3>Additional Skills</h3>
          <div className="additional-skills">
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">Agile/Scrum</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Testing</span>
            <span className="skill-tag">DevOps</span>
            <span className="skill-tag">Web Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;