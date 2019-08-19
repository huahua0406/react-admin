import { combineReducers } from 'redux';
import siderReducer from './reducers/sider';

const reducers = combineReducers({
    sider: siderReducer
});

export default reducers;
