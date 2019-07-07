import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import featured from '../data/featuredSectionData';
import zaobao from '../../img/zaobao.pdf';

const featuredList = featured.data.map((data, i) => (
  <Col xs={12} md={5} lg={4}>
    <div key={i} className="cardFeature">
      <Row>
        <Col>
          <h4>{data.title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="readMoreButton" variant="light">
            
            <a href={data.url}>Read More</a>
          </Button>
        </Col>
      </Row>
    </div>
  </Col>
));

const FeaturedSection = () => (
  <Container>
    <Row className="h2Header">
      <Col xs={12}>
        <span>Featured On</span>
      </Col>
    </Row>
    <Row>{featuredList}</Row>
  </Container>
);

//make this component available to the app
export default FeaturedSection;
