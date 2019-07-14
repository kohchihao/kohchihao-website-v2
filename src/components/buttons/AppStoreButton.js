import React from 'react';
import { Button } from 'react-bootstrap';

import { FaApple } from 'react-icons/fa';

const AppStoreButton = () => {
  return (
    <Button variant="light">
      <FaApple className="faButton" />
      <span>Download</span>
    </Button>
  );
};

//make this component available to the app
export default AppStoreButton;
