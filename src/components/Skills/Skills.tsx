// import React, { useEffect, useRef } from 'react';
// import './Skills.css';

// const Skills = () => {
//   const skillsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const skillBars = entry.target.querySelectorAll('.skill-progress');
//             skillBars.forEach((bar, index) => {
//               setTimeout(() => {
//                 bar.classList.add('animate');
//               }, index * 200);
//             });
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     if (skillsRef.current) {
//       observer.observe(skillsRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const skillCategories = [
//     {
//       title: "Programming Languages",
//       skills: [
//         { name: "Python", level: 95 },
//         { name: "R", level: 85 },
//         { name: "SQL", level: 90 },
//         { name: "JavaScript", level: 80 },
//         { name: "Java", level: 75 }
//       ]
//     },
//     {
//       title: "ML/AI Frameworks",
//       skills: [
//         { name: "TensorFlow", level: 90 },
//         { name: "PyTorch", level: 88 },
//         { name: "Scikit-learn", level: 95 },
//         { name: "Keras", level: 85 },
//         { name: "OpenCV", level: 80 }
//       ]
//     },
//     {
//       title: "Data & Cloud",
//       skills: [
//         { name: "AWS", level: 85 },
//         { name: "Docker", level: 80 },
//         { name: "Pandas", level: 95 },
//         { name: "Apache Spark", level: 75 },
//         { name: "MLflow", level: 70 }
//       ]
//     }
//   ];

//   return (
//     <section id="skills" className="skills-section">
//       <div className="skills-container" ref={skillsRef}>
//         <div className="skills-header">
//           <h2 className="section-title">Technical Skills</h2>
//           <p className="section-subtitle">
//             A comprehensive toolkit for building intelligent systems and analyzing complex data
//           </p>
//         </div>

//         <div className="skills-grid">
//           {skillCategories.map((category, categoryIndex) => (
//             <div key={categoryIndex} className="skill-category">
//               <h3 className="category-title">{category.title}</h3>
//               <div className="skills-list">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="skill-item">
//                     <div className="skill-header">
//                       <span className="skill-name">{skill.name}</span>
//                       <span className="skill-percentage">{skill.level}%</span>
//                     </div>
//                     <div className="skill-bar">
//                       <div 
//                         className="skill-progress"
//                         data-level={skill.level}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="stats-grid">
//           {[
//             { number: "50+", label: "Projects Completed" },
//             { number: "5+", label: "Years Experience" },
//             { number: "10+", label: "Technologies Mastered" },
//             { number: "100%", label: "Client Satisfaction" }
//           ].map((stat, index) => (
//             <div key={index} className="stat-item">
//               <div className="stat-number">{stat.number}</div>
//               <div className="stat-label">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "R", 
        "SQL",
        "JavaScript",
        "Java"
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "OpenCV"
      ]
    },
    {
      title: "Data & Cloud",
      skills: [
        "AWS",
        "Docker",
        "Pandas",
        "Apache Spark",
        "MLflow"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container" ref={skillsRef}>
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building intelligent systems and analyzing complex data
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="stats-grid">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "10+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
