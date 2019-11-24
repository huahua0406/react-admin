import * as constants from '@/redux/constants/constants';

const initialState = {
    collapsed: false,
};


export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SIDER_COLLAPSED:
            return Object.assign({}, state, {
                collapsed: !state.collapsed
            });
        default:
            return state
    }
};