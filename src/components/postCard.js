import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export const PostCard = ({ id, slug, title = "No title", excerpt = "", authors = [] }) => {
  return (
    <div key={id}>
      <Link
        to={slug}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
        <h3
          css={css`
            margin-bottom: ${rhythm(1 / 4)};
          `}
        >
          {title}{" "}
          <span
            css={css`
              color: #555;
            `}
          >
            — {(authors || []).map(user => user && <span>{user.frontmatter.username}</span>)}
          </span>
        </h3>
        <p>{excerpt}</p>
      </Link>
    </div>
  )
}
