import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { User } from "../components/user";
import { PostCard } from "../components/postCard";
import { Tag } from "../components/Tag";
import * as styles from "./keyword-post.module.css"

export default function KeywordPost({ data }) {
  const post = data.markdownRemark;
  const tags = post.frontmatter.tags || [];
  const authors = post.frontmatter.authors || [];
  const related = post.frontmatter.related || [];
  const sources = post.frontmatter.sources || [];
  
  return (
    <Layout>
      <div>
        <div className="post-header">
            <h1>{post.frontmatter.title}</h1>
            <div className={styles.tags}>
                {tags.map(tag => (
                    <Tag name={tag}></Tag>
                ))}
            </div>
        </div>
        <div className="post-content">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className={styles.postMeta}>
            { sources.length > 0 && (
                <>
                <h3>Sources</h3>
                <div className="sources">
                    {sources.map(sourceUrl => (
                        <div key={sourceUrl}>
                            <a className={styles.sourceLink} href={sourceUrl}>{sourceUrl}</a>
                        </div>
                    ))}
                </div>
                </>
            )}

            { authors.length > 0 && (
                <>
                <h3>Auteurs</h3>
                <div className="authors">
                    {authors.map(author => author && (
                        <Link to={author.fields.slug}
                              key={author.id}>
                            <User 
                                username={author.frontmatter.username}
                                avatar={author.frontmatter.avatar}
                                excerpt={author.excerpt} />
                        </Link>
                    ))}
                </div>
                </>
            )}

            { related.length > 0 && (
                <>
                <h3>Articles liés</h3>
                <div className="related">
                    {related.map(post => (post && 
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
        sources
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