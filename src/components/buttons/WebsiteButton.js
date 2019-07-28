import React from 'react';
import { Button } from 'react-bootstrap';

import { IoMdBrowsers } from 'react-icons/io';

const WebsiteButton = () => {
  return (
    <Button variant="light">
      <IoMdBrowsers className="faButton" />
      <span>Website</span>
    </Button>
  );
};

//make this component available to the app
export default WebsiteButton;
