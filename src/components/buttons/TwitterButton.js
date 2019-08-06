import React from 'react';
import { Button } from 'react-bootstrap';

import { FaTwitter } from 'react-icons/fa';

const TwitterButton = ({url_link}) => {
  return (
    <Button variant="light" href={url_link}>
      <FaTwitter className="faButton" />
      <span>Twitter</span>
    </Button>
  );
};

//make this component available to the app
export default TwitterButton;
