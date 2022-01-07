import { MYPAGE_REVIEWS, MYPAGE_LIKES } from '../actions/index';

const mypageInit = {
    mypageReviews: [],
    mypageLikes: [],
};

const mypageReducer = (state = mypageInit, action) => {
    switch (action.type) {
        case MYPAGE_REVIEWS:
        return { mypageReviews: action.payload.mypageReviews };

        case MYPAGE_LIKES:
        return { mypageLikes: action.payload.mypageLikes };

    default:
        return state;
    }
};

export default mypageReducer;