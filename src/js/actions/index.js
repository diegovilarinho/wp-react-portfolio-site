const WPAPI = require('wpapi'); //Utitlizando módulo node-wpapi
const WP = new WPAPI({endpoint: 'http://diegovilarinho.dev/wp-json'})

export const fetchPosts = () => {

	//Fazer request HTTP para obter todos os posts
	const request = WP.posts();

	return {
		type: 'FETCH_POSTS',
		payload: request // Promise
	};
};

export const fetchPost = (post_id) => {

	const request = WP.posts().id(post_id);
	return {
		type: 'FETCH_POST',
		payload: request
	};
};