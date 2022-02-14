import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { getCookie, setCookie } from '../../shared/Cookie';

//액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//액션 생성 함수
const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));

//초기State
const initialState = {
  user: null,
  is_login: false,
};

//reducer, 여기서 불변성 유지(immer)사용
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, draft => {
        draft.user = action.payload.user; //payload를 거쳐서 유저정보를 가져옴
      }),
    [LOG_OUT]: (state, action) => produce(state, draft => {}),
    [GET_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

//액션 크리에이터 export
const actionCreators = {
  logIn,
  logOut,
  getUser,
};

export { actionCreators };
