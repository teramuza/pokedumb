import { combineReducers } from 'redux';

// import todos from './todospath'
import auth from './auth'
import pokemon from './pokemon'


const appReducer = combineReducers({
	//todos
	pokemon,
	auth
});

export default appReducer;