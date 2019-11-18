module.exports = {
  siteMetadata: {
    title: `Why I love Corgis`,
    description: `I dont know why, but corgis are the best`,
    author: `skjghisole`,
  },
  /* Your site config here */
  plugins: [
  	`gatsby-plugin-emotion`,
  	`gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Corgi World`,
        short_name: `Corgi`,
        start_url: `/about`,
        background_color: `white`,
        theme_color: `white`,
        display: `standalone`,
        icon: `src/assets/images/corgi1.jpg`
      }
    },
  	{
  		resolve: `gatsby-source-filesystem`,
  		options: {
  			name: `src`,
  			path: `${__dirname}/src/`
  		}
  	},
  	{
  		resolve: `gatsby-plugin-typography`,
  		options: {
  			pathToConfigModule: `src/utils/typography`
  		}
  	},
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ]
}
