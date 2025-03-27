import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Surf Report',
      tech: 'MERN Stack',
      image: '/path-to-image.jpg',
      deployedLink: 'https://example.com/surf-report',
      repoLink: 'https://github.com/username/surf-report',
    },
    {
      title: 'Portfolio Builder',
      tech: 'React',
      image: '/path-to-image2.jpg',
      deployedLink: 'https://example.com/portfolio-builder',
      repoLink: 'https://github.com/username/portfolio-builder',
    },
    {
      title: 'Surf Report',
      tech: 'MERN Stack',
      image: '/path-to-image.jpg',
      deployedLink: 'https://example.com/surf-report',
      repoLink: 'https://github.com/username/surf-report',
    },
    {
      title: 'Portfolio Builder',
      tech: 'React',
      image: '/path-to-image2.jpg',
      deployedLink: 'https://example.com/portfolio-builder',
      repoLink: 'https://github.com/username/portfolio-builder',
    },
    {
      title: 'Surf Report',
      tech: 'MERN Stack',
      image: '/path-to-image.jpg',
      deployedLink: 'https://example.com/surf-report',
      repoLink: 'https://github.com/username/surf-report',
    },
    {
      title: 'Portfolio Builder',
      tech: 'React',
      image: '/path-to-image2.jpg',
      deployedLink: 'https://example.com/portfolio-builder',
      repoLink: 'https://github.com/username/portfolio-builder',
    },



  ];

  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;