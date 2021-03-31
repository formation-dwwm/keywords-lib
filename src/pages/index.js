import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { PostCard } from "../components/postCard"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Keywords List
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostCard 
            id={node.id} 
            slug={node.fields.slug} 
            title={node.frontmatter.title} 
            excerpt={node.excerpt} 
            authors={node.frontmatter.authors}/>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/src\\/keywords-docs/"}} 
      sort: { fields: [frontmatter___title], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            authors {
              frontmatter {
                username
              }
            }
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