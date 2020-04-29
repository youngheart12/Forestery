import {combineReducers} from 'redux';
import authReducer from './authReducer';
import dataReducer from './dataReducer';
import instaReducer from './instaReducer';
export default combineReducers({
    auth:authReducer,
    admin:dataReducer,
    instagramAccount:instaReducer
});