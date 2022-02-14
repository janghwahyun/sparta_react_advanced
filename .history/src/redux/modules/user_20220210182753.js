import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

//액션 타입
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//액션 생성 함수
const logIn = createAction(LOG_IN, user => ({ user }));
