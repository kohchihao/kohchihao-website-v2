const siteMetadata = require('./src/data/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-69828666-2",
      // Puts tracking script in the head instead of the body
      head: true,
      // Setting this parameter is optional
      anonymize: true,
    },
  },],
  pathPrefix: '/kohchihao-website-v2',
  
};
