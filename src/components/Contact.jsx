import React, { useEffect } from 'react';
import { portfolioData } from '../data';

const Contact = () => {
  useEffect(() => {
    // Load LinkedIn script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="dark-bg">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to discuss projects or collaborations.</p>
      <p>
        <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: portfolioData.contact.linkedInBadge }} />
    </section>
  );
};

export default Contact;