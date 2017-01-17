import React from 'react';
import { Link } from 'react-router';

export default class PostFeaturedImage extends React.Component {
	render() {
		const { postLink, imageSrc, imageAlt } = this.props;

		return (
			<div className="ish-blog-post-media">
				<Link to={postLink} className="ish-img-scale"><img src={imageSrc} alt={imageAlt} /></Link>
			</div>
		);
	}
}
