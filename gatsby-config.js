module.exports = {
	siteMetadata: {
		title: 'Arthur Morisson ',
		desc: 'Création de Sites internets à Lorient'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-styled-components',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				excerpt_separator: `<!-- end -->`
			}
		},

		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp'
	]
};
