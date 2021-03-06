import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppStoreButton from './buttons/AppStoreButton';
import GooglePlayButton from './buttons/GooglePlayButton';
import WebsiteButton from './buttons/WebsiteButton';
import GithubButton from './buttons/GithubButton';
import TelegramButton from './buttons/TelegramButton';
import TwitterButton from './buttons/TwitterButton';

import projects from '../data/projectSectionData';
import Image from './Image';

const Post = ({
  src,
  title,
  description,
  tech,
  backgroundColorClass,
  urls
}) => {
  return (
    <Container className={'project ' + backgroundColorClass}>
      <div className="image">
        <Image className="product-image" filename={src} />
      </div>

      <div className="product">
        <div className="content">
          <p className="title">
            <span>{title}</span>
          </p>
          <p className="description">
            <span>{description}</span>
            <br />
          </p>

          <p className="title">
            <span>Tech Used:</span>
          </p>

          <p className="description">
            <span>{tech}</span>
          </p>

          <Row>
              {urls.map((url, ii) => {
                return (
                  <Col>
                    <Buttons
                      key={ii}
                      url_link={url.url}
                      url_type={url.url_type}
                    />
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </Container>
  );
};

const Buttons = ({ url_link, url_type }) => {
  switch (url_type) {
    case 'ios':
      return <AppStoreButton url_link={url_link} />;
    case 'android':
      return <GooglePlayButton url_link={url_link} />;
    case 'website':
      return <WebsiteButton url_link={url_link} />;
    case 'github':
      return <GithubButton url_link={url_link} />;
    case 'telegram':
      return <TelegramButton url_link={url_link} />;
    case 'twitter':
      return <TwitterButton url_link={url_link} />;
    default:
      return null;
  }
};

const projectList = projects.data.map((project, i) => {
  return (
    <Post
      key={i}
      src={project.img_path}
      title={project.name}
      description={project.description}
      tech={project.tech}
      backgroundColorClass={project.backgroundColorClass}
      urls={project.urls}
    />
  );
});

const ProjectClientSection = () => (
  <Container id="projects">
    <Row className="h2Header">
      <Col xs={12}>
        <span>Projects</span>
      </Col>
    </Row>
    <Row>
      <Col>{projectList}</Col>
    </Row>
  </Container>
);

//make this component available to the app
export default ProjectClientSection;
