module.exports = {
  siteMetadata: {
    title: 'Louis R. DeScioli',
    description: 'The personal site and portfolio of Louis R. DeScioli',
    keywords: [
      'software engineer',
      'portfolio',
      'design',
      'descioli',
      'personal site',
      'software',
      'augmented reality',
      'indie game dev',
      'MIT',
      'resume',
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-react-next`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-yaml`,
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          {
            resolve: 'my-gatsby-remark-images',
            options: { maxWidth: 800, addCaptions: true },
          },
          'gatsby-remark-copy-linked-files',
          'my-gatsby-remark-youtube',
          // This has to come after the youtube plugin
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-53420391-3',
      },
    },
  ],
}
