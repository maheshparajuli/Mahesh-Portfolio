import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/username' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username' },
    { name: 'Twitter', url: 'https://twitter.com/username' },
    { name: 'Instagram', url: 'https://instagram.com/username' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Mahesh Parajuli</h3>
              <p>Full Stack Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative web solutions and 
              bringing ideas to life through code.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>



          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 maheshparajuli717@gmail.com</p>
              <p>📱 +977 9865495350</p>
              <p>📍 Kathmandu, Nepal</p>
            </div>
            <button 
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Mahesh Parajuli. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="/privacy" className="legal-link">Privacy Policy</a>
            <a href="/terms" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;