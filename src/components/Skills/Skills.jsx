// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//   const skillsData = [
//     {
//       category: "Frontend",
//       skills: [
//         { name: "HTML5", level: 90 },
//         { name: "CSS3", level: 85 },
//         { name: "JavaScript", level: 88 },
//         { name: "React", level: 85 },
//         { name: "Vue.js", level: 75 }
//       ]
//     },
//     {
//       category: "Backend",
//       skills: [
//         { name: "Node.js", level: 80 },
//         { name: "Python", level: 85 },
//         { name: "PHP", level: 75 },
//         { name: "Express.js", level: 80 },
//         { name: "Django", level: 70 }
//       ]
//     },
//     {
//       category: "Database & Tools",
//       skills: [
//         { name: "MongoDB", level: 80 },
//         { name: "MySQL", level: 85 },
//         { name: "Git", level: 90 },
//         { name: "Docker", level: 70 },
//         { name: "AWS", level: 65 }
//       ]
//     }
//   ];

//   const SkillBar = ({ skill }) => (
//     <div className="skill-item">
//       <div className="skill-header">
//         <span className="skill-name">{skill.name}</span>
//         <span className="skill-percentage">{skill.level}%</span>
//       </div>
//       <div className="skill-bar">
//         <div 
//           className="skill-progress" 
//           style={{ width: `${skill.level}%` }}
//         ></div>
//       </div>
//     </div>
//   );

//   return (
//     <section id="skills" className="skills-section">
//       <div className="container">
//         <div className="skills-header">
//           <h2 className="section-title">My Skills</h2>
//           <p className="section-subtitle">
//             Technologies and tools I work with
//           </p>
//         </div>

//         <div className="skills-content">
//           {skillsData.map((category, index) => (
//             <div key={index} className="skills-category">
//               <h3 className="category-title">{category.category}</h3>
//               <div className="skills-list">
//                 {category.skills.map((skill, skillIndex) => (
//                   <SkillBar key={skillIndex} skill={skill} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="skills-additional">
//           <h3>Additional Skills</h3>
//           <div className="additional-skills">
//             <span className="skill-tag">Responsive Design</span>
//             <span className="skill-tag">RESTful APIs</span>
//             <span className="skill-tag">GraphQL</span>
//             <span className="skill-tag">Agile/Scrum</span>
//             <span className="skill-tag">UI/UX Design</span>
//             <span className="skill-tag">Testing</span>
//             <span className="skill-tag">DevOps</span>
//             <span className="skill-tag">Web Performance</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delay
          setTimeout(() => {
            skillsData.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, `${categoryIndex}-${skillIndex}`]));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skillsData]);

  const SkillBar = ({ skill, categoryIndex, skillIndex }) => {
    const skillKey = `${categoryIndex}-${skillIndex}`;
    const isAnimated = animatedSkills.has(skillKey);

    return (
      <div className={`skill-item ${isAnimated ? 'animate' : ''}`}>
        <div className="skill-header">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <div 
            className="skill-progress"
            style={{ 
              width: isAnimated ? `${skill.level}%` : '0%',
              animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
            }}
          ></div>
          <div className="skill-bar-glow"></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <div className={`skills-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="section-title">
            <span className="title-text">My Skills</span>
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className={`skills-content ${isVisible ? 'slide-up' : ''}`}>
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`skills-category ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="category-title">
                <span className="category-icon"></span>
                {category.category}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`skills-additional ${isVisible ? 'fade-in-up' : ''}`}>
          <h3 className="additional-title">
            <span className="additional-icon">+</span>
            Additional Skills
          </h3>
          <div className="additional-skills">
            {[
              "Responsive Design", "RESTful APIs", "GraphQL", "Agile/Scrum",
              "UI/UX Design", "Testing", "DevOps", "Web Performance"
            ].map((skill, index) => (
              <span 
                key={index}
                className="skill-tag"
                style={{ animationDelay: `${800 + (index * 100)}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Floating elements for decoration */}
        <div className="floating-elements">
          <div className="floating-circle floating-circle-1"></div>
          <div className="floating-circle floating-circle-2"></div>
          <div className="floating-circle floating-circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;