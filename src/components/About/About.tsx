// import React from 'react';
// import { Brain, Code, Database, TrendingUp } from 'lucide-react';
// import './About.css';

// const About = () => {
//   const features = [
//     {
//       icon: Brain,
//       title: "Artificial Intelligence",
//       description: "Developing intelligent systems that can learn, reason, and make decisions"
//     },
//     {
//       icon: TrendingUp,
//       title: "Machine Learning",
//       description: "Creating predictive models and algorithms that improve with experience"
//     },
//     {
//       icon: Database,
//       title: "Data Science",
//       description: "Extracting insights and patterns from complex datasets"
//     },
//     {
//       icon: Code,
//       title: "Deep Learning",
//       description: "Building neural networks for computer vision and natural language processing"
//     }
//   ];

//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">
//         <div className="about-header">
//           <h2 className="section-title">About Me</h2>
//           <p className="section-subtitle">
//             I'm passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
//             With expertise in data science and deep learning, I transform complex data into actionable insights and 
//             intelligent solutions.
//           </p>
//         </div>

//         <div className="features-grid">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-card">
//               <div className="feature-icon">
//                 <feature.icon size={48} />
//               </div>
//               <h3 className="feature-title">{feature.title}</h3>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="about-content">
//           <div className="about-text">
//             <h3 className="about-text-title">My Journey</h3>
//             <p className="about-paragraph">
//               With a strong foundation in mathematics and computer science, I've dedicated my career to 
//               understanding and implementing cutting-edge AI technologies. My experience spans across 
//               various domains including computer vision, natural language processing, and predictive analytics.
//             </p>
//             <p className="about-paragraph">
//               I believe in the power of data-driven decision making and am constantly exploring new 
//               techniques and methodologies to push the boundaries of what's possible with AI and ML.
//             </p>
//           </div>
          
//           <div className="expertise-card">
//             <h4 className="expertise-title">Expertise Areas</h4>
//             <div className="expertise-list">
//               {[
//                 "Machine Learning Algorithms",
//                 "Deep Learning & Neural Networks",
//                 "Computer Vision",
//                 "Natural Language Processing",
//                 "Data Analysis & Visualization",
//                 "Model Deployment & MLOps"
//               ].map((skill, index) => (
//                 <div key={index} className="expertise-item">
//                   <div className="expertise-dot"></div>
//                   <span>{skill}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';
import './About.css';
import ago from '../../assets/images/conference.jpg';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Developing intelligent systems that can learn, reason, and make decisions"
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Creating predictive models and algorithms that improve with experience"
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Extracting insights and patterns from complex datasets"
    },
    {
      icon: Code,
      title: "Deep Learning",
      description: "Building neural networks for computer vision and natural language processing"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm passionate about leveraging artificial intelligence and machine learning to solve real-world problems. 
            With expertise in data science and deep learning, I transform complex data into actionable insights and 
            intelligent solutions.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={48} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="about-content">
          <div className="about-photo">
            <div className="photo-container">
              <img 
                src={ago}
                alt="Profile" 
                className="profile-photo"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
          
          <div className="about-text">
            <h3 className="about-text-title">My Journey</h3>
            <p className="about-paragraph">
              With a strong foundation in mathematics and computer science, I've dedicated my career to 
              understanding and implementing cutting-edge AI technologies. My experience spans across 
              various domains including computer vision, natural language processing, and predictive analytics.
            </p>
            <p className="about-paragraph">
              I believe in the power of data-driven decision making and am constantly exploring new 
              techniques and methodologies to push the boundaries of what's possible with AI and ML.
            </p>
          </div>
          
          <div className="expertise-card">
            <h4 className="expertise-title">Expertise Areas</h4>
            <div className="expertise-list">
              {[
                "Machine Learning Algorithms",
                "Deep Learning & Neural Networks",
                "Computer Vision",
                "Natural Language Processing",
                "Data Analysis & Visualization",
                "Model Deployment & MLOps"
              ].map((skill, index) => (
                <div key={index} className="expertise-item">
                  <div className="expertise-dot"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;