import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

import '../../static/css/style.css';
import { useSiteMetadata } from './hooks/useSiteMetadata';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = props => {
  const { children } = props;
  const { author, siteUrl, description } = useSiteMetadata();
  const { navigation }  = useSiteMetadata();

  return (
    <div>
      <Helmet
        title={author.name}
        meta={[{ name: 'keywords', content: 'koh chi hao' }]}
      >
        <meta name="author" content={author.name} />
        <meta name="description" content={description} />
        <meta property="og:title" content={author.name} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={author.gravatar} />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>

      <Header navigation={navigation} name={author.name}/>
      <div className="wrapper">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
