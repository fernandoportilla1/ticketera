import { combineReducers } from 'redux';

import reducer from './reducer';
import login from './reducer';

export default combineReducers({
    app: reducer,
    login: login
});
