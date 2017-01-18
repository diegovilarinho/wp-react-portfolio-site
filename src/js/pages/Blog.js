import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LazyLoad from 'react-lazy-load';

import { fetchPostsWithLazyLoad } from '../actions';
import PostCard from '../components/blog/PostCard';
import organizeBlogColumns from '../vendor/blogEffects';

const WPAPI = require('wpapi'); //Utitlizando módulo node-wpapi
const WP = new WPAPI({endpoint: 'http://diegovilarinho.dev/wp-json'});

class Blog extends React.Component {
	
	componentDidMount() {
		this.props.fetchPostsWithLazyLoad({postsPerPage: 6, pageNumber: this.props.pageNumber});
	}

	render() {
		const { posts, pageNumber, totalPosts, totalPages } = this.props;

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


		if(totalPages > 1) {	
			window.onscroll = () => {
				const lastCard = document.querySelector('.post-card--latest');
				console.log(lastCard.getBoundingClientRect().top);

				if(lastCard.getBoundingClientRect().top <= 0 && lastCard.getBoundingClientRect().top >= 50) {
					this.props.fetchPostsWithLazyLoad({postsPerPage: 6, pageNumber: this.props.pageNumber + 1});
				}
			};	
		}

		const blogPosts = posts.map((post, index) => {
			let lastCard = false;

			if(index === posts.length - 1) {
				lastCard = true;
			}

			return (
				<PostCard 
					key={post.id}
					lastCard={lastCard}
					postUpdateDate={post.modified}
					postCategoryId={post.cats[0].term_id}
					postCategoryName={post.cats[0].cat_name} 
					postCategoryColor={post.post_category_color} 
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
	const { all, pageNumber, totalPosts, totalPages } = state.posts;

	return { 
		posts: all,
		pageNumber,
		totalPosts,
		totalPages
	};
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchPostsWithLazyLoad }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Blog);