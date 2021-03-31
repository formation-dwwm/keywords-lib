import React from 'react';
import { css } from "@emotion/react"
// import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

export const Tag = ({ name }) => (
    <label
        css={css`
            margin-right: ${rhythm(1 / 4)};
            background: #333;
            padding: 4px 12px;
            border-radius: 15px;
            color: #eaeaea;
            font-size: 16px;
          `}
    >{ name }</label>
)