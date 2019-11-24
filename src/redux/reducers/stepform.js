import * as constants from '@/redux/constants/constants';

const initialState = {
    current: 0,
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CURRENT_STEP:
            return Object.assign({}, state, {
                current: action.current
            });
        case constants.SET_STEP_INFO:
            return Object.assign({}, state, {
                data: action.info
            });
        default:
            return state;
    }
};
