/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:'Sando Bujutsu',
    description: 'Willkomen auf der Sando Bujutsu Homepage',
    author:'Simon'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: `${__dirname}/content/posts`
        }
      }
    ]
  }