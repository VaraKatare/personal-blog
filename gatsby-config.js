// const path = require(`path`)

const siteMetadata = {
  siteUrl: `https://diarydeveloper.netlify.com`,
  title: `Diary Develop[er]`,
  siteTitle: `Diary Develop[er]`,
  description: `About Tutorial, Event, and Many More About Web Tech`,
  titleTemplate: `%s | blog.scottspence.me`,
  twitterUsername: `@ar1sf_r`,
  facebookAppID: ``,
  pages: [`tags`], //`about`, `contact`,
  nameContent: `Diary Develop[er] - blog`,
  developerName: `Aris Fathur Rahman`,
  developerUrl: `https://diarydeveloper.netlify.com`,
  imageLink: `/favicon.png`,
  faviconPng: `./static/favicon.png`,
  contact: [
    { name: `GitHub`, link: `https://github.com/VaraKatare` },
    { name: `Dev.to`, link: `https://dev.to/varakatare` },
    { name: `Twitter`, link: `https://twitter.com/ar1sf_r` },
    {
      name: `LinkedIn`,
      link: `https://www.linkedin.com/in/aris-fathur-rahman-516695112/`,
    },
    { name: `Email`, link: `mailto:fathur.fathur7@gmail.com` },
  ],
  // this is for favicon and manifest
  backgroundColour: `#663399`,
  // this is for favicon and manifest
  themeColour: `#755f9f`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  lastBuildDate: new Date(Date.now()).toISOString(),
};

module.exports = {
  siteMetadata: siteMetadata,
  // mapping: {
  //   'Mdx.fields.featuredImage': `File.absolutePath`
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito:400,700', 'Poppins:400,700'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // defaultLayouts: { default: path.resolve('./src/components/Layout.js') },
        gatsbyRemarkPlugins: [
          `gatsby-remark-embed-video`,
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitle,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
        icon: siteMetadata.faviconPng,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid:
                    site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [
                    { 'content:encoded': edge.node.html },
                  ],
                });
              });
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { published: { eq: true } } }
              ) {
                edges {
                  node {
                    html
                    fields { path }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: `${siteMetadata.title} feed`,
          },
        ],
      },
    },
  ],
};
