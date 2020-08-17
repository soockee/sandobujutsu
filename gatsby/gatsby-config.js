module.exports = {
  siteMetadata: {
    title: 'Citrus Sport Marketing Agency',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Citrus Sport Marketing Agency',
        short_name: 'Citrus',
        start_url: '/',
        icon: 'src/images/c-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ru'
      }
    }
  ],
};
