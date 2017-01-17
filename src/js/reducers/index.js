import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

import PostsReducer from './PostsReducer';

export default combineReducers({
	posts: PostsReducer,
	routing: routerReducer
});