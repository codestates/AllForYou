import { LOGIN, PROFILE_IMG, LOGOUT } from '../action/index';

const loginReducer = (
  state = {
    isLogin: false,
    isAdmin: false,
    id: null,
    nickname: null,
    email: null,
    oauth: false,
  },
  action
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        isAdmin: action.payload.isAdmin,
        id: action.payload.id,
        nickname: action.payload.nickname,
        email: action.payload.email,
        oauth: action.payload.oauth,
      };
    case PROFILE_IMG:
      return {
        ...state,
        profileimg: action.payload.profileimg
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        isAdmin: false,
        id: null,
        nickname: null,
        email: null,
        oauth: false,
      };

    default:
      return state;
  }
};

export default loginReducer;