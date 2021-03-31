import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { User } from "../components/user"
import * as styles from './about.module.css'


  export default function About({ data }) {
    return (
      <Layout>
        <div>
          <h1 className={styles.title}>À propos</h1>
          <p>
              Dictionnaire interne des termes clefs du Développement Web et Web Mobile.
          </p>
          {data.allMarkdownRemark.edges.map(({ node }) => node &&(
            <Link to={node.fields.slug}
              key={node.id}>
            <User 
              username={node.frontmatter.username}
              avatar={node.frontmatter.avatar}
              excerpt={node.excerpt} />
            </Link>
          ))}
        </div>
      </Layout>
    )
  }

export const query = graphql`
  query {
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