import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import 'moment/locale/pt-br';
import PostFeaturedImage from './PostFeaturedImage';

class PostCard extends React.Component {

	render() {
		const { postUpdateDate, postCategory, 
		featuredImageUrl, featuredImageAlt, 
		postLink, postTitle, postExcerpt } = this.props;

		const lasUpdateDate = moment(postUpdateDate).format('DD MMM, YYYY');

		let postFeaturedImageComponent = '';
		if(featuredImageUrl !== null) {
			postFeaturedImageComponent = <PostFeaturedImage 
											imageSrc={featuredImageUrl} 
											imageAlt={featuredImageAlt} 
											postLink={postLink} 
										/>;
		}

		return (
			<div className="ish-item ish-color9">
			
				<div className="post-card__content" style={styles.postCardContent}>
					{postFeaturedImageComponent}
					<div className="ish-blog-post-title">
						<h4><Link to={postLink} className="ish-underline">{postTitle}</Link></h4>
					</div>
					<div className="ish-row">
						<div className="ish-blog-post-details ish-col-xs-12 ish-col-sm-4">
							<div>{lasUpdateDate}</div>
							<div className="ish-label">em</div>
							<div><a href="#" className="ish-underline">{postCategory}</a></div>
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

const styles = {
	postCardContent: { 
		borderColor: '#bbdd00', 
	}
}


export default PostCard;
