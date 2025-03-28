import React from 'react';
import './Portfolio.css';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    
    
    
    {
      title: 'Odin Recipes',
      tech: 'HTML',
      image: '/Icons/odin.png', // Replace with the actual image path
      deployedLink: 'https://raabaja718.github.io/odin-recipes/',
      repoLink: 'https://github.com/RaaBaJa718/odin-recipes.git',
    },
    {
      title: 'Word_Scramble',
      tech: 'HTML/CSS/JavaScript',
      image: '/Icons/word.jpg', // Replace with the actual image path
      deployedLink: 'https://mmullen4.github.io/Word_Scramble/',
      repoLink: 'https://github.com/MMullen4/Word_Scramble.git',
    },
    {
      title: 'prework-study-guide',
      tech: 'HTML/CSS/JavaScript',
      image: '/Icons/study.png', // Replace with the actual image path
      deployedLink: 'https://raabaja718.github.io/prework-study-guide/',
      repoLink: 'https://github.com/RaaBaJa718/prework-study-guide.git',
    },
    {
      title: 'ReadMeGenie',
      tech: 'JavaScript',
      image: '/Icons/genie.webp', // Ensure this file exists in the public/Icons directory
      deployedLink: 'https://raabaja718.github.io/ReadMeGenie/',
      repoLink: 'https://github.com/RaaBaJa718/ReadMeGenie.git',
    },
    {
      title: 'VroomVroom-VehicleVault',
      tech: 'TypeScript',
      image: '/Icons/vroom.jpg', // Replace with the actual image path
      deployedLink: 'https://example.com/portfolio-builder',
      repoLink: 'https://github.com/RaaBaJa718/VroomVroom-VehicleVault.git',
    },
    {
      title: 'WorkWarden',
      tech: 'JavaScript',
      image: '/Icons/workwarden.png', // Replace with the actual image path
      deployedLink: 'https://raabaja718.github.io/WorkWarden/',
      repoLink: 'https://github.com/RaaBaJa718/WorkWarden.git',
    },

  ];

  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div
        className="portfolio-grid"
        style={{
          margin: '0 auto', // Centers the grid horizontally
          maxWidth: '900px', // Adds a reasonable width limit
          transform: 'translateX(-180px)', // Optional: Slightly moves the grid to the left
        }}
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;