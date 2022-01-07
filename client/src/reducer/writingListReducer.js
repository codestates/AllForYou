import { REMOVE_FROM_LIST, ADD_TO_LIST } from "../action/index";
import { resultSearch } from "../components/searchList";
import dummy2 from '../dummy/dummy2';

const writingListReducer = (state = dummy2, action) => { //첫번째 인자는 기본값, 두번째 인자는 액션

    switch (action.type) {//action type으로 분기
        case ADD_TO_LIST:
            return Object.assign({}, state, { //immutable, Object.assign을 이용해 빈 객체를 생성, 현 상태인 state넣고 내용 추가
                listItems: [...state.listItems, action.payload]
            })

            break;

        case REMOVE_FROM_LIST:
            let currentList = state.listItems.filter((el) => el.listId !== action.payload.listId)
            return Object.assign({}, state, {
                listItems: currentList
            })

            break;
        default:
            return state;
    }
}

export default writingListReducer;