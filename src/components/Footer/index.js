import React from 'react';
import { FaHeart, FaGithub } from 'react-icons/fa';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const Footer = () => {
  const { author } = useSiteMetadata();

  return (
    <div className="footer">
      <div className="separator" />

      <div className="footerBox">
        <span>
          {'Made with '} <FaHeart className="heartIcon" /> {' and '}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={'../../../img/gatsbyjs.svg'}
              alt="Gatsby"
              className="gatsbyIcon"
            />
          </a>
          {' by '} <span>{author.name}</span>
        </span>

        <div className="pull-right">
          <a href={author.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="githubIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
