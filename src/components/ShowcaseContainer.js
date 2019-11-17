import React from 'react'
import { css } from '@emotion/core'

export default ({ children }) => (
	<div css={css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0em 1em;
		margin: 1em 0;
	`}>
	{children}
	</div>
)