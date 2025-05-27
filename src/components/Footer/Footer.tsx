

// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import './Footer.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       icon: Github,
//       url: "https://github.com",
//       label: "GitHub"
//     },
//     {
//       icon: Linkedin,
//       url: "https://linkedin.com",
//       label: "LinkedIn"
//     },
//     {
//       icon: Mail,
//       url: "mailto:maheshparajuli717@gmail.com",
//       label: "Email"
//     }
//   ];

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-content">
//           <div className="footer-social">
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.url}
//                 aria-label={social.label}
//                 className="footer-social-link"
//               >
//                 <social.icon size={20} />
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <p className="footer-copyright">
//               © {currentYear} Mahesh Parajuli. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:maheshparajuli717@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social-section">
            <h4 className="footer-social-title">Follow Me</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="footer-social-link"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Mahesh Parajuli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;