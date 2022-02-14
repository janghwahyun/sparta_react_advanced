import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

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
export default handleActions({
  [LOG_IN]: (state, action) => produce(state, draft => {}),
  [LOG_OUT]: (state, action) => produce(state, draft => {}),
  [GET_USER]: (state, action) => produce(state, draft => {}),
});

//액션 크리에이터 export
const actionCreators = {
  logIn,
  logOut,
  getUser,
};
