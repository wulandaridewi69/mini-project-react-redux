import { combineReducers } from 'redux';
import Map from './Map/reducer';
import Auth from './Auth/reducer';

export default combineReducers({
    Map, 
    Auth,
});
