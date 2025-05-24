import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contacts from '../components/Contacts/Contacts';
import Footer from '../components/Footer/Footer';
import './Index.css';

const App = () => {
  return (
    <div className="portfolio-container">
      <div className="background-animation"></div>
      <div className="content-wrapper">
        <Header />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
