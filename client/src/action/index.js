export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_MODAL = "LOGIN_MODAL";
export const SIGNUP_MODAL = "SIGNUP_MODAL";
export const ISLOGIN = "ISLOGIN";
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const PROFILE_IMG = "PROFILE_IMG";
export const SIGNUP_STATE = "SIGNUP_STATE";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const MYPAGE_REVIEWS = "MYPAGE_REVIEWS";
export const MYPAGE_LIKES = "MYPAGE_LIKES";
export const SET_MESSAGE_MODAL = 'SET_MESSAGE_MODAL';
<<<<<<< HEAD
export const SET_USERINFO = 'SET_USERINFO';
=======
export const CONTENTS_MODAL = "CONTENTS_MODAL"
>>>>>>> c8db02040c4ebe68dd561fc5aa1e4cf4222c75b2

// export const login = (booleanLogin, booleanAdmin, nickname, email, booleanOauth, profileimg) => {
//     return {
//         type: LOGIN,
//         payload: {
//             isLogin: booleanLogin,
//             isAdmin: booleanAdmin,
//             nickname: nickname,
//             email: email,
//             isOauth: booleanOauth,
//             profileimg: profileimg
//         },
//     };
// };

export const login = (isLogin) => {
    return {
        type: LOGIN,
        payload: {
            isLogin
        },
    };
};

export const setUserinfo = (userinfo) => {
    return {
        type: SET_USERINFO,
        payload: {
            ...userinfo,
        },
    };
};

export const loginModal = (state) => {
    return {
        type: LOGIN_MODAL,
        payload: { isModal: state }
    };
};

<<<<<<< HEAD
=======
export const signupState = (state) => {
    return {
        type: SIGNUP_STATE,
        payload: { isState: state }
    };
}

>>>>>>> c8db02040c4ebe68dd561fc5aa1e4cf4222c75b2
export const signupModal = (state) => {
    return {
        type: SIGNUP_MODAL,
        payload: { isState: state }
    };
}

export const setAccessToken = (state) => {
    return {
        type: SET_ACCESSTOKEN,
        payload: { accessToken: state }
    };
}

export const setMypageReviews = (state) => {
    return {
        type: MYPAGE_REVIEWS,
        payload: { mypageReviews: state }
    };
}

export const setMypageLikes = (state) => {
    return {
        type: MYPAGE_LIKES,
        payload: { mypageLikes: state }
    };
}

export const logout = (state) => {
    return {
        type: LOGOUT,
    };
};

export const addToList = (id) => {
    return {
        type: ADD_TO_LIST,
        payload: {
            id
        }
    }
}

export const removeFromList = (id) => {
    return {
        type: REMOVE_FROM_LIST,
        payload: {
            id
        }
    }
}

export const setMessageModal = (boolean, content) => {
    return {
        type: SET_MESSAGE_MODAL,
        payload: {
            isModalOpen: boolean,
            content,
        },
    };
};

export const contentsModal = (boolean, info) => {
    return {
        type: CONTENTS_MODAL,
        payload: {
            modalOnOff: boolean,
            info,
        }
    };
};