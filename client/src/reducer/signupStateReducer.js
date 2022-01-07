import { SIGNUP_STATE } from '../actions/index';

const signupStateReducer = (state = { isModal: false }, action) => {
    switch (action.type) {
        case SIGNUP_STATE:
        return { isModal: action.payload.isModal };

    default:
        return state;
    }
};

export default signupStateReducer;