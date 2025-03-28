import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2 style={{ marginTop: '5rem', fontSize: '2rem', color: 'white', textAlign: 'center' }}>
  Resume
</h2>
      <p>
        <a href="/public/Icons/resume.pdf" download>
          Download My Resume
        </a>
      </p>
      <ul>
        <p>Proficiency 1: JavaScript, TypeScript, HTML, CSS, Python</p>
        <p>Proficiency 2: React, Node.js, Express.js</p>
        <p>Proficiency 3: MySQL</p>
        <p>Proficiency 4: Git, GitHub</p>
        <p>Proficiency 5: Responsive Design</p>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
