import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import 'moment/locale/pt-br';

import PostFeaturedImage from './PostFeaturedImage';

class PostCard extends React.Component {

	render() {
		const { 
			postUpdateDate, 
			postCategoryId,
			postCategoryName,
			postCategoryColor,
			featuredImageUrl, 
			featuredImageAlt, 
			postLink, 
			postTitle, 
			postExcerpt 
		} = this.props;

		const lasUpdateDate = moment(postUpdateDate).format('DD MMM, YYYY');

		let postFeaturedImageComponent = '';
		if(featuredImageUrl !== null) {
			postFeaturedImageComponent = <PostFeaturedImage 
											imageSrc={featuredImageUrl} 
											imageAlt={featuredImageAlt} 
											postLink={postLink} 
										/>;
		}

		const borderStyle = {
			borderColor: postCategoryColor
		}
		const categoryStyle = {
			fontSize: '1em',
			fontWeight: '700',
			paddingTop: '3px',
			paddingBottom: '3px',
			paddingLeft: '10px',
			paddingRight: '10px',
			color: '#fff',
			backgroundColor: postCategoryColor

		}
		let classes = 'ish-item ish-color' + postCategoryId;

		if(this.props.lastCard === true) {
			classes = classes + ' post-card--latest';
		}

		return (
			<div className={classes}>
				<div className="post-card__content" style={borderStyle}>
					{postFeaturedImageComponent}
					<div className="ish-blog-post-title">
						<h4><Link to={postLink} className="ish-underline">{postTitle}</Link></h4>
					</div>
					<div className="ish-row">
						<div className="ish-blog-post-details ish-col-xs-12 ish-col-sm-4">
							<div>{lasUpdateDate}</div>
							<div><Link to="#" className="ish-underline" style={categoryStyle}>{postCategoryName}</Link></div>
							<div className="ish-read-more">
								<Link to={postLink} className="ish-underline ish-underline-visible">Leia mais</Link>
							</div>
						</div>
						<div className="ish-blog-post-content ish-col-xs-12 ish-col-sm-8" 
							dangerouslySetInnerHTML={{__html: postExcerpt}}></div>
					</div>
				</div>

			</div>
		);
	}
}

export default PostCard;
