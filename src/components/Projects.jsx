import React from 'react';
import { portfolioData } from '../data';

const Projects = () => {
  return (
    <section className="light-bg">
      <h2>Projects</h2>
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;