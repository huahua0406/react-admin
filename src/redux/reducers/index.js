import { combineReducers } from 'redux';
import siderReducer from './sider';
import stepformReducer from './stepform';

const rootReducer = combineReducers({
    sider: siderReducer,
    stepform: stepformReducer
});

export default rootReducer;