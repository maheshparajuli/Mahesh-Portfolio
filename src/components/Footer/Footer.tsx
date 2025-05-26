
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
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
      url: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">AI Portfolio</h3>
            <p className="footer-description">
              Transforming ideas into intelligent solutions through artificial intelligence, 
              machine learning, and data science.
            </p>
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

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links-list">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-contact-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <p>Kathmandu,Nepal</p>
              <p>maheshparajuli717@gmail.com</p>
              <p>+977 9865495350</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* <p className="footer-copyright">
              <span>© {currentYear} AI Portfolio. Made with</span>
              <Heart className="heart-icon" size={16} />
              <span>and lots of coffee</span>
            </p> */}
            {/* <p className="footer-tech">
              Powered by React, TypeScript, and Custom CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;