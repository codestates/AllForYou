import { LOGIN, SET_USERINFO } from '../action/index';

export const initialState = {
  isLogin: false,
  userinfo: {
    nickname: '',
    email: '',
    profileImage: '',
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    case SET_USERINFO:
      return Object.assign({}, state, {
        userinfo: action.payload,
      });

    default:
      return state;
  }
};

export default loginReducer;