import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import resume from '../../img/resume.pdf';
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTelegramPlane,
  FaFilePdf
} from 'react-icons/fa';
import { useSiteMetadata } from './hooks/useSiteMetadata';

import { MdMail } from 'react-icons/md';

const MainSection = props => {
  const { author } = useSiteMetadata();
  const {
    name,
    bio,
    email,
    github,
    linkedIn,
    medium,
    telegram,
    gravatar
  } = author;

  return (
    <Container className="MainSectionContainer">
      <Row>
        <Col xs={5} md={3} lg={2}>
          <Image src={gravatar} roundedCircle fluid thumbnail />
        </Col>
        <Col xs={6} md={8} className="my-auto">
          <Row>
            <h3>{name}</h3>
          </Row>
          <Row className="profileBio">
            <span dangerouslySetInnerHTML={{ __html: bio }} />
          </Row>

          <Row className="socialLinks">
            <ul>
              <li>
                <a href={github} target="_blank" rel="noreferrer noopener">
                  <FaGithub />
                </a>
              </li>

              <li>
                <a href={linkedIn} target="_blank" rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a href={medium} target="_blank" rel="noreferrer noopener">
                  <FaMedium />
                </a>
              </li>

              <li>
                <a href={telegram} target="_blank" rel="noreferrer noopener">
                  <FaTelegramPlane />
                </a>
              </li>

              <li>
                <a
                  href={'mailto:' + email}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MdMail />
                </a>
              </li>

              <li>
                <a href={resume} target="_blank" rel="noreferrer noopener">
                  <FaFilePdf />
                </a>
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

//make this component available to the app
export default MainSection;
