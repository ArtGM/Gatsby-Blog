import React from 'react';
import { graphql } from 'gatsby';
import PostListing from '../components/posts/postlisting';

import Layout from '../components/layout';

const IndexPage = ({ data, location }) => (
	<Layout location={location}>
		<h1>Derniers projets...</h1>
		{data.allMarkdownRemark.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
	</Layout>
);

export default IndexPage;

export const query = graphql`
	query post {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						title
						date
						_PARENT
					}
					fields {
						slug
					}
					html
					excerpt
				}
			}
		}
	}
`;
