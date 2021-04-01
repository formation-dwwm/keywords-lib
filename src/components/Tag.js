import React from 'react';
import { css } from "@emotion/react"
// import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { Link } from 'gatsby';

export const Tag = ({ name }) => (
    
    <Link
        to={ `/tag/${name}` } 
        css={css`
            margin-right: ${rhythm(1 / 4)};
            background: #333;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 16px;
            text-decoration: none; 
            background-image: none; 
            text-shadow: none;
            color: #eaeaea;
        `}
    >
        { name }
    </Link>
    
)