import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { User } from "../components/user";
import { PostCard } from "../components/postCard";
import { Tag } from "../components/Tag";
import * as styles from "./keyword-post.module.css"

export default function AuthorPage({ data }) {
    const author = data.markdownRemark;
    const posts = data.allMarkdownRemark.edges?.map(e => e.node) || [];
    console.log(posts);
    return (
        <Layout>
            <div>
                <User
                    username={author.frontmatter.username}
                    avatar={author.frontmatter.avatar} />
                <div className="post-content">
                    <div dangerouslySetInnerHTML={{ __html: author.html }} />
                </div>
                <div className="post-meta">
                    { posts.length > 0 && (
                        <>
                        <h3>Articles de cet auteur</h3>
                        <div className="related">
                            {posts.map(post => (post && 
                                <PostCard 
                                    key={post.id}
                                    id={post.id} 
                                    slug={post.fields.slug} 
                                    title={post.frontmatter.title} 
                                    excerpt={post.excerpt} 
                                    authors={post.frontmatter.authors}/>
                            ))}
                        </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query($slug: String!, $username: String!) {
    markdownRemark(
        fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        username
        avatar 
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {authors: {elemMatch: {frontmatter: {username: {eq: $username}}}}}, fileAbsolutePath: {regex: "/src\\/keywords-docs/"}}
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