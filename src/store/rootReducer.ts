import { combineReducers } from 'redux';
import Auth from './Auth/reducer';
import Detail from './Detail/reducer';
import Comments from './Comments/reducer';
import Home from './Home/reducer';

export default combineReducers({
    Auth,
    Detail,
    Comments,
    Home,
});
