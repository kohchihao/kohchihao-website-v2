import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import resume from '../../img/resume.pdf';

const ResumeSection = () => (
  <Container className="ResumeSectionContainer">
    <Row>
      <Col xs={12} >
        <div className="ResumeSectionContainerBox">
          <Row>
            <Col>
              <h1>Resume</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <span>Interested in my resume or want to hire me?</span>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Button className="downloadButton" variant="primary" href={resume}>
                Download
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
);

//make this component available to the app
export default ResumeSection;
