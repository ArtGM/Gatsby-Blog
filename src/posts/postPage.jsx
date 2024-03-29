import React, { Component } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export default class PostPage extends Component {
	render() {
		const { data } = this.props;
		return (
			<Layout>
				<h1>{data.markdownRemark.frontmatter.title}</h1>
				<time>{data.markdownRemark.frontmatter.date}</time>
				<div
					dangerouslySetInnerHTML={{
						__html: data.markdownRemark.html
					}}
				/>
			</Layout>
		);
	}
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			excerpt
			html
			frontmatter {
				title
				date
			}
		}
	}
`;
