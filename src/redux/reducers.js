import { combineReducers } from 'redux';
import siderReducer from './reducers/sider';
import stepformReducer from './reducers/stepform';

const reducers = combineReducers({
    sider: siderReducer,
    stepform: stepformReducer
});

export default reducers;
