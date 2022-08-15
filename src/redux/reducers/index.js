import { combineReducers } from 'redux';
import userReducer from './userReducer';
import post from './postReducer';
import album from './albumReducer';
import photo from './photoReducer';

const reducers = { userReducer, post, album, photo };

const rootReducer = combineReducers(reducers);

export default rootReducer;
