import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            imageLink
            twitterUsername
            pages
            contact {
              name
              link
            }
            siteLanguage
            lastBuildDate
            siteLocale
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
