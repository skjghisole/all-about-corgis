import React from 'react'
import { css } from '@emotion/core'

export default ({ children }) => (
	<div css={css`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0em 1em;
		margin: 1em 0;
		@media (max-width: 576px) {
			margin: 1em 1em;
			grid-template-columns: 1fr;
			grid-gap: 1em;
		}
	`}>
	{children}
	</div>
)