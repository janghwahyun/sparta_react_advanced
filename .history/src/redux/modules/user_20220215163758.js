import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { deleteCookie, getCookie, setCookie } from '../../shared/Cookie';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

//액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//액션 생성 함수
// const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));

//초기State, defalut props같은 경우
const initialState = {
  user: null, //처음에는 로그인 안했을테니까 null
  is_login: false, //처음에는 로그인 안했을테니까 null
};
const user_initial = {
  user_name: 'firebase name',
};

//middleware actions : 로그인 상태 확인하고 메인페이지로 넘어가 주지
const loginActions = user => {
  //getState는 뭐임?
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.push('/');
  };
};

//auth에 우리가 가입시킬 어떤 유저정볼를 받아서 넘겨줘야하는데, 이걸 미들웨어에서 함.

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    const auth = getAuth();
    createUserWithEmailAndPassword(id, pwd, user_name)
      .then(userCredential => {
        console.log(user);
        // Signed in
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

//reducer, 여기서 불변성 유지(immer)사용, store만들기 위해 reducer사용
export default handleActions(
  {
    //LOG_IN -> SET_USER
    [SET_USER]: (state, action) =>
      // produce코드로 불변성을 유지
      produce(state, draft => {
        setCookie('is_login', 'sucess');
        draft.user = action.payload.user; //action안에 타입도 있고 payload가 있는데 payload를 거쳐서 유저정보를 가져옴
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

//액션 크리에이터 export
const actionCreators = {
  // logIn,
  logOut,
  getUser,
  loginActions,
  signupFB,
};

export { actionCreators };
