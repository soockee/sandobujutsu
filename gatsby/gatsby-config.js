module.exports = {
  siteMetadata: {
    title: 'Sando Bu Jutsu',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sando Bu Jutsu',
        short_name: 'SandoBuJutsu',
        start_url: '/',
        icon: 'src/images/c-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'de'
      }
    }
  ],
};
