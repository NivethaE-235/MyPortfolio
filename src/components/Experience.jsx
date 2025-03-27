import React from 'react';
import { portfolioData } from '../data';

const Experience = () => {
  return (
    <section className="dark-bg">
      <h2>Experiences</h2>
      {portfolioData.experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.title}</h3>
          {exp.duration && <p>Duration: {exp.duration}</p>}
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;