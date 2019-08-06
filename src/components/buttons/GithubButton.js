import React from 'react';
import { Button } from 'react-bootstrap';

import { FaGithub } from 'react-icons/fa';

const GithubButton = ({url_link}) => {
  return (
    <Button variant="light" href={url_link}>
      <FaGithub className="faButton" />
      <span>GitHub</span>
    </Button>
  );
};

//make this component available to the app
export default GithubButton;
