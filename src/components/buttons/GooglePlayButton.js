import React from 'react';
import { Button } from 'react-bootstrap';

import { FaGooglePlay } from 'react-icons/fa';

const GooglePlayButton = ({url_link}) => {
  return (
    <Button variant="light" href={url_link} >
      <FaGooglePlay className="faButton" />
      <span>Download</span>
    </Button>
  );
};

//make this component available to the app
export default GooglePlayButton;
