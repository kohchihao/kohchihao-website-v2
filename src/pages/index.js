import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';

import MainSection from '../components/MainSection';
import TechList from '../components/TechList';
import AppearList from '../components/AppearList';
import ProjectClientList from '../components/ProjectClientList';

const IndexPage = () => (
  <Layout>
    <div>
      <MainSection />

      <AppearList />

      <TechList />

      <ProjectClientList />

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
