import React from 'react';
import './style.scss';

const Footer = ({ children }) => {
  return (
    <div className="footer">
      <span>by</span>
      <a
        className="footer-author-link"
        href="https://www.linkedin.com/in/rayssa-de-souza/"
        target="_blank"
        rel="noreferrer">
        Rayssa de Souza
      </a>
      <span>using</span>
      <p className="footer-api-link">API Open Trivia Database</p>
      {children}
    </div>
  );
};

export default Footer;
