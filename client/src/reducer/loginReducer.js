import { 
  LOGIN, 
  SET_NICKNAME, 
  SET_EMAIL,
  SET_IMAGE
} from '../action/index';

export const initialState = {
  isLogin: false,
  nickname: '',
  email: '',
  profileImage: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin,
      });

    case SET_NICKNAME:
      return Object.assign({}, state, {
        nickname: action.payload.nickname,
      });

    case SET_EMAIL:
    return Object.assign({}, state, {
      emaildata: action.payload.emaildata,
    });

    case SET_IMAGE:
    return Object.assign({}, state, {
      profileImage: action.payload.profileImage,
    });

    default:
      return state;
  }
};

export default loginReducer;