import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
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
    `
  );
  return site.siteMetadata;
};
