import React from 'react';
import { Link } from 'gatsby';

const PostListing = ({ post }) => (
	<article>
		<h3>
			<Link to={post.fields.slug}>{post.frontmatter.title}</Link>
		</h3>
		<time>{post.frontmatter.date}</time>
		<p>{post.excerpt}</p>
	</article>
);

export default PostListing;
