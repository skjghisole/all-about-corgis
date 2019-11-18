import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'



const SEO = ({ desc, lang, meta, title }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
		`)
	const metaDescription = desc || site.siteMetadata.description
	return (
			<Helmet
				htmlAttributes={{
					lang
				}}
				title={title}
				titleTemplate={`%s | ${site.siteMetadata.title}`}
				meta={
					[{
						name: `desciption`,
						content: metaDescription,
					},
					{
						property: `og:title`,
						content: title,
					},
					{
						property: `og:description`,
						content: metaDescription
					},
					{
						property: `og:type`,
						content: `website`
					},
					{
						name: `twitter:card`,
						content: `website`
					},
					{
						name: `twitter:creator`,
						content: site.siteMetadata.author
					},
					{
						name: `twitter:title`,
						content: title
					},
					{
						name: `twitter:description`,
						content: metaDescription
					}
					].concat(meta)
				}
				/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	desciption: ``
}

SEO.propTypes = {
	desciption: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
}

export default SEO