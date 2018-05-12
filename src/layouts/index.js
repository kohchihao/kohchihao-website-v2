import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './starter.css'
import './index.css'
import "materialize-css/dist/css/materialize.css"
 


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
        { name: 'description', content: 'Koh Chi Hao\'s portfolio website.' },
        { name: 'keywords', content: 'koh chi hao' },
      ]}
    />

    <Header />
    <div
      style={{
        backgroundColor: "#000000",
        margin: '0 auto',
        maxWidth: '100%',
        paddingTop: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "#212936",
          margin: '0 auto',
          maxWidth: '100%',
          padding: '0px ',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
      
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
