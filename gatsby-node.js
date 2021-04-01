const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `keywords-docs` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type AuthorMd implements Node {
        username: String!
        avatar: String
      }
    `
    createTypes(typeDefs)
  }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/src\\/keywords-docs/"}} 
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/keyword-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

  const authorsResults = await graphql(`
    query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/src\\/authors/"}} 
        ) {
        edges {
            node {
            fields {
                slug
            }
            frontmatter {
                username
            }
          }
        }
      }
    }
  `)

  authorsResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/author-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        username: node.frontmatter.username
      },
    })
  })

  const tagsResults = await graphql(`
    query {
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/src\\/keywords-docs/"}} 
        ) {
        edges {
            node {
            fields {
                slug
            }
            frontmatter {
                tags
            }
          }
        }
      }
    }
  `);

  const tagsMap = new Map();

  tagsResults.data.allMarkdownRemark.edges.forEach(({node}) => {
      if(node && node.frontmatter && node.frontmatter.tags && node.frontmatter.tags.length > 0){
          node.frontmatter.tags.forEach(tagName => {
            if(!tagsMap.has(tagName)){
                tagsMap.set(tagName, []);
            }
            const tagPosts = tagsMap.get(tagName);
            tagPosts.push(node.fields.slug);
          })
      }
  })
  
  tagsMap.forEach((postSlugs, tagName) => {
    createPage({
      path: `tag/${tagName}`,
      component: path.resolve(`./src/templates/tag-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        tagName: tagName,
      },
    })
  })
}