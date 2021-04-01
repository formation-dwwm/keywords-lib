import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby"
import { PostCard } from '../components/postCard';
import { css } from '@emotion/react';

export default function TagPage({ data, pageContext: { tagName }}) {
    const posts = data.allMarkdownRemark.edges.map(e => e.node) || [];

    return (
        <Layout>
            <div>
                <h1 css={css`
                    display: inline-block;
                    border-bottom: 1px solid;
                `}>{ tagName }</h1>
                { posts && posts.map(post => (
                    <PostCard 
                        key={post.id}
                        id={post.id} 
                        slug={post.fields.slug} 
                        title={post.frontmatter.title} 
                        excerpt={post.excerpt} 
                        authors={post.frontmatter.authors}/>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($tagName: String!) {
    allMarkdownRemark(
        filter: {frontmatter: {tags: {eq: $tagName}}, fileAbsolutePath: {regex: "/src\\/keywords-docs/"}}
      ) {
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