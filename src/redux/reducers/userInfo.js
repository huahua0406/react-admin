import * as constants from '@/redux/constants/constants';

const defaultStore = {
    userInfo: null
};

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.SET_USER_INFO:
            return Object.assign({}, state, {
                userInfo: action.result.info
            });
        default:
            return state
    }
};