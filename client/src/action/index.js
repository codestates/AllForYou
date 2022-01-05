export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ISLOGIN = "ISLOGIN";
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const PROFILE_IMG = "PROFILE_IMG";
export const SIGNUP_STATE = "SIGNUP_STATE";
export const MYPAGE_REVIEWS = "MYPAGE_REVIEWS";
export const MYPAGE_LIKES = "MYPAGE_LIKES";

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

export const profileimg = (srcImg) => {
    return {
        type: PROFILE_IMG,
        payload: { profileimg: srcImg }
    };
}

export const loginModal = (state) => {
    return {
        type: LOGIN_MODAL,
        payload: { isModal: state }
    };
};

export const signupState = (state) => {
    return {
        type: SIGNUP_STATE,
        payload: { isModal: state }
    };
}

export const signupModal = (state) => {
    return {
        type: SIGNUP_MODAL,
        payload: { isModal: state }
    };
}

export const setAccessToken = (state) => {
    return {
        type: SET_ACCESSTOKEN,
        payload: { accessToken: state }
    };
}

export const mypageReviews = (state) => {
    return {
        type: MYPAGE_REVIEWS,
        payload: { mypageReviews: state }
    };
}

export const mypageLikes = (state) => {
    return {
        type: MYPAGE_LIKES,
        payload: { mypageLikes: state }
    };
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
