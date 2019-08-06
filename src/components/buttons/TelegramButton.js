import React from 'react';
import { Button } from 'react-bootstrap';

import { FaTelegram } from 'react-icons/fa';

const TelegramButton = ({url_link}) => {
  return (
    <Button variant="light" href={url_link}>
      <FaTelegram className="faButton" />
      <span>Telegram</span>
    </Button>
  );
};

//make this component available to the app
export default TelegramButton;
