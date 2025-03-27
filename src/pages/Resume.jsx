import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2 style={{ marginTop: '5rem', fontSize: '2rem', color: 'white', textAlign: 'center' }}>
  Resume
</h2>
      <p>
        <a href="/path-to-your-resume.pdf" download>
          Download My Resume
        </a>
      </p>
      <ul>
        <li>Proficiency 1: React</li>
        <li>Proficiency 2: JavaScript</li>
        <li>Proficiency 3: CSS</li>
        <li>Proficiency 4: HTML</li>
        <li>Proficiency 5: Responsive Design</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
