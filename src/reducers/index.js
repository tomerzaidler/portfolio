import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import linkedinReducer from './buttonReducer';
import facebookReducer from './buttonReducer';
import githubReducer from './buttonReducer';

export default combineReducers({
    header: headerReducer,
    linkedin: linkedinReducer,
    facebook: facebookReducer,
    github: githubReducer
});
