import React from 'react';
import { Button } from 'react-bootstrap';

import { FaTelegram } from 'react-icons/fa';

const TelegramButton = () => {
  return (
    <Button variant="light">
      <FaTelegram className="faButton" />
      <span>Telegram</span>
    </Button>
  );
};

//make this component available to the app
export default TelegramButton;
