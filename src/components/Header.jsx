import React from 'react';
import { portfolioData } from '../data';

const Header = () => {
  return (
    <header>
      <img
        src={portfolioData.profile.image}
        alt="Profile"
        className="profile-pic"
      />
      <h1>{portfolioData.profile.name}</h1>
      <p className="tagline">{portfolioData.profile.title}</p>
      <p>
        {portfolioData.profile.socialLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
            {index < portfolioData.profile.socialLinks.length - 1 ? ' | ' : ''}
          </React.Fragment>
        ))}
      </p>
    </header>
  );
};

export default Header;