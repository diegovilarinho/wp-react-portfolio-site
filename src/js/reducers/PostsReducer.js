import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions/types';

const INITIAL_STATE = {
	all: [],
	totalPosts: 0,
	totalPages: 0,
	pageNumber: 1,
	selected: null,
	loading: null
};

export default ( state = INITIAL_STATE, action ) => {

	console.log(action);

	switch(action.type) {
		case FETCH_POSTS:
			return { 
				...state, 
				all: action.payload, 
				totalPosts: action.payload._paging.total , 
				totalPages: action.payload._paging.totalPages
			}
		case FETCH_POST:
			return { ...state, selected: action.payload }
		default:
			return state;
	}
};