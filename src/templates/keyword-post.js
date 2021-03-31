import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { User } from "../components/user";
import { PostCard } from "../components/postCard";

export default function KeywordPost({ data }) {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags || [];
  const authors = post.frontmatter.authors || [];
  const related = post.frontmatter.related || [];

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div className="tags">
            {tags.map(tag => (
                <span className="label">{tag}</span>
            ))}
        </div>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                
        { authors.length > 0 && (
            <>
            <h3>Auteurs :</h3>
            <div className="authors">
                {authors.map(author => (
                    <User 
                    username={author.frontmatter.username}
                    avatar={author.frontmatter.avatar}
                    excerpt={author.excerpt} />
                ))}
            </div>
            </>
        )}

        { related.length > 0 && (
            <>
            <h3>Articles liés :</h3>
            <div className="related">
                {related.map(post => (post && 
                    <PostCard 
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
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
        fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        tags
        authors {
            id
            frontmatter {
                username
            }
            fields {
                slug
            }
            excerpt
        }
        related {
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