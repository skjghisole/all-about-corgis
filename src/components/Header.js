import React from 'react'
import { css } from '@emotion/core'

export default ({ children }) => {
	return <div css={css`
			width: 100%;
			height: 10vh;
		`}>
		<div>	
			{children}
		</div>
	</div>
}