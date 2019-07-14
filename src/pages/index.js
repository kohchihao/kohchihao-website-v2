import React from 'react';

import Layout from '../components/layout';

import MainSection from '../components/MainSection';
import TechList from '../components/TechList';
import FeaturedSection from '../components/FeaturedSection';
import ProjectClientSection from '../components/ProjectClientSection';
import { graphql } from 'gatsby';
import ResumeSection from '../components/ResumeSection';

const IndexPage = props => (
  <Layout {...props}>
    <div>
      <MainSection author={props.data.site.siteMetadata.author} />

      <ResumeSection />
      <FeaturedSection />

      {/*<TechList />*/}

      <ProjectClientSection /> 
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author {
          name
          bio
          email
          github
          linkedIn
          medium
          telegram
          gravatar
        }
        description
        siteUrl
        navigation {
          value
          link
        }
      }
    }
  }
`;
