import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <div className="project-image-container">
      <img src={image} alt={title} />
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon-link"
      >
        <img
          src="/Icons/github.png" /* Replace with the actual path to your GitHub icon */
          alt="GitHub Link"
          className="github-icon"
        />
      </a>
    </div>
    <h3>{title}</h3>
    <p>{deployedLink && <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Live App</a>}</p>
    <p>Tech Used: {repoLink}</p>
  </div>
);

export default Project;