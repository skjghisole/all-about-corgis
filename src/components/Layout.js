import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { rhythm } from '../utils/typography'
import Header from './Header'

export default ({ children }) => {
	return <div
	>
		<div css={css`
			margin: 0 auto;
			max-width: 700px;
			padding: ${rhythm(2)};
			padding-top: ${rhythm(1.5)};
			position: relative;
		`}>
			<Header>
				<Link to="/">
				<h3
						css={css`
							margin-bottom: ${rhythm(2)};
							display: inline-block;
							font-style: normal;
						`}
					>
						Corgi World
				</h3>
				</Link>
				<Link css={css`float: right`} to="/about">
					But why?
				</Link>
			</Header>
			{children}
		</div>
	</div>
}
