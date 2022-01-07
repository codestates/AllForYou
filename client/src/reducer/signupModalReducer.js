import { SIGNUP_MODAL } from '../action/index';

const signupModalReducer = (state = { isModal: false }, action) => {
  switch (action.type) {
    case SIGNUP_MODAL:
      return { isModal: action.payload.isModal };

    default:
      return state;
  }
};

export default signupModalReducer;