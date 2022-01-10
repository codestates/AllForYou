import { SET_MESSAGE_MODAL } from "../action/index";

const initialState = {
    messageModal: {
        isModalOpen: false,
        content: '',
    }
}

const foruModalReducer = (state = initialState, action) => { //첫번째 인자는 기본값, 두번째 인자는 액션
    switch (action.type) {//action type으로 분기
        case SET_MESSAGE_MODAL:
            return Object.assign({}, state, {
                messageModal: {
                    ...action.payload,
                },
            });

        default:
            return state;
    }
}

export default foruModalReducer;