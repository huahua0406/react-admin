import * as constants from '@/redux/constants/constants';

const defaultStore = {
    collapsed: false,
};


export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.SIDER_COLLAPSED:
            return Object.assign({}, state, {
                collapsed: !state.collapsed
            });
        default:
            return state
    }
};