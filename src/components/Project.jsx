const Project = ({ title, image, deployedLink, repoLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Live App
      </a>
      {' | '}
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </p>
  </div>
);

export default Project;