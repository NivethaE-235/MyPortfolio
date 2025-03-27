import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section className="light-bg">
      <h2>About Me</h2>
      <p>{portfolioData.about}</p>
    </section>
  );
};

export default About;