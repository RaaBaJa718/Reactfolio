import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {/* Placeholder for pages */}
      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </>
    
  );
};

export default App;