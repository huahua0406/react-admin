import * as constants from '@/redux/constants/constants';

const initialState = {
    userInfo: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_USER_INFO:
            return Object.assign({}, state, {
                userInfo: action.result.info
            });
        default:
            return state
    }
};