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
      <MainSection  />

      <ResumeSection />
      <FeaturedSection />

      {/*<TechList />*/}

      <ProjectClientSection /> 
    </div>
  </Layout>
);

export default IndexPage;