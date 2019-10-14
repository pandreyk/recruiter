import { combineReducers } from 'redux';
import { candidatesReducer } from './candidates/reducers';
import { optionsReducer } from './options/reducers';
import { authReducer } from './auth/reducers';

export default combineReducers({
    candidates: candidatesReducer,
    options: optionsReducer,
    auth: authReducer
})