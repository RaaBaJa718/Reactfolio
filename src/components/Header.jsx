import React from 'react';

const Header = ({ currentSection, setCurrentSection }) => (
   <header>
     <h1>Ruben's Portfolio</h1>
     <nav>
       <ul>
         {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
           <li
             key={section}
             className={currentSection === section ? 'active' : ''}
             onClick={() => setCurrentSection(section)}
           >
             {section}
           </li>
         ))}
       </ul>
     </nav>
   </header>
);

export default Header;