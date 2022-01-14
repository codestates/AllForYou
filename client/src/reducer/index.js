import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import loginModalReducer from "./loginModalReducer";
import signupModalReducer from "./signupModalReducer";
import accessTokenReducer from "./accessTokenReducer";
import signupStateReducer from "./signupStateReducer";
import mypageReducer from "./mypageReducer";
import writingListReducer from "./writingListReducer";
import foruReducer from "./foruReducer";
import contentsModalReducer from './contentsModalReducer';
import contentsLikeReducer from './contentsLikeReducer'

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
    loginReducer,
    loginModalReducer,
    signupModalReducer,
    accessTokenReducer,
    signupStateReducer,
    mypageReducer,
    writingListReducer,
    foruReducer,
    contentsModalReducer,
    contentsLikeReducer
});

export default rootReducer;