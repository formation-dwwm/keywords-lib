/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `DWWM Keywords`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.authors": "MarkdownRemark.frontmatter.username",
    "MarkdownRemark.frontmatter.related": "MarkdownRemark.frontmatter.title"
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
