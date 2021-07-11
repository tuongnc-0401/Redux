import { combineReducers } from 'redux'
import hobbyReducer from './hobby';
const reducers = combineReducers({
    hobby: hobbyReducer,
});
export default reducers;
