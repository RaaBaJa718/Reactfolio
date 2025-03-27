import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css';
import './index.css';



const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div className="app-container">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="content">
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
};

export default App;