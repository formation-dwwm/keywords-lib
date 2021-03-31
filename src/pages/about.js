import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { User } from "../components/user"


  export default function About({ data }) {
    return (
      <Layout>
        <Container>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                Dictionnaire interne des termes clefs du Développement Web et Web Mobile.
            </p>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <User 
                username={node.frontmatter.username}
                avatar={node.frontmatter.avatar}
                excerpt={node.excerpt} />
            ))}
        </Container>
      </Layout>
    )
  }

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/src\\/authors/"}} 
      sort: { fields: [frontmatter___username], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            username
            avatar
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`