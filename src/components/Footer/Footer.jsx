import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mahesh Parajuli. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="mailto:maheshparajuli717@gmail.com">Email</a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
