import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';
import PostCard from '../components/blog/PostCard';
import organizeBlogColumns from '../vendor/blogEffects';

class Blog extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { posts } = this.props;

		if (Object.keys(posts).length > 0) {
			setTimeout(() => {
				organizeBlogColumns();
			}, 1);
		}

		if (posts == 0) {
			return(
				<h1>Carregando...</h1>	
			);
		}

		const blogPosts = posts.map(post => {
			return (
				<PostCard 
					key={post.id}
					postUpdateDate={post.modified}
					postCategory={post.cats[0].cat_name}
					featuredImageUrl={post.featured_image_src}
					featuredImageAlt={post.featured_image_alt}
					postLink={post.link}
					postTitle={post.title.rendered}
					postExcerpt={post.excerpt.rendered}
				/>
			);
		});
		
		return (
			<div className="ish-main-content ish-blog ish-blog-masonry ish-scroll-anim ish-2col">
				{blogPosts}
			</div>	
		);
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts.all };
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchPosts }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);