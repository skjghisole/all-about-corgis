import React from 'react'
import { css } from '@emotion/core'
import { ryhthm } from '../utils/typography'

export default ({ children }) => {
	return <div css={css`max-width: 750px;width: 100%;`}>
		{children}
	</div>
}
