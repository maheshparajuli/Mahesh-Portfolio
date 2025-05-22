import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Mahesh Parajuli</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('skills')}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('projects')}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;