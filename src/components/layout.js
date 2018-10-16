import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './Header/index';

import '../layouts/starter.css';
import '../layouts/index.css';
import 'materialize-css/dist/css/materialize.css';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Koh Chi Hao"
      meta={[
        { name: 'description', content: "Koh Chi Hao's portfolio website." },
        { name: 'keywords', content: 'koh chi hao' }
      ]}
    />

    <Header />
    <div className="wrapper1">
      <div className="wrapper2">
        {children}
      </div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
