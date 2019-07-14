import React from 'react';
import { Button } from 'react-bootstrap';

import { FaGooglePlay } from 'react-icons/fa';

const GooglePlayButton = () => {
  return (
    <Button variant="light">
      <FaGooglePlay className="faButton" />
      <span>Download</span>
    </Button>
  );
};

//make this component available to the app
export default GooglePlayButton;
