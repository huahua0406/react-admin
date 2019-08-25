import * as constants from '../constants';

export const setCurrentStep = (current) => ({
    type: constants.SET_CURRENT_STEP,
    current
});

export const setStepInfo = (info) => ({
    type: constants.SET_STEP_INFO,
    info
});