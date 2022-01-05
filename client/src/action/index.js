export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ISLOGIN = "ISLOGIN";
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";

export const login = (state) => {
    return {
        type: LOGIN,
        payload: {
        isLogin: state.isLogin,
        isAdmin: state.isAdmin,
        isOauth: state.isOauth,
        id: state.id,
        nickname: state.nickname,
        email: state.email,
        },
    };
};

export const loginModal = (state) => {
    return {
        type: LOGIN_MODAL,
        payload: { isModal: state }
    };
};

export const signupModal = (state) => {
    return {
        type: SIGNUP_MODAL,
        payload: { isModal: state }
    };
}

export const setAccessToken = (state) => {
    return {
        type: SET_ACCESSTOKEN,
        payload: { accessToken: state.accessToken }
    };
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
