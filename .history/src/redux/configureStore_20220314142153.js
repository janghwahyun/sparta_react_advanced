import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import User from './modules/user';
import Post from './modules/post'; //대문자 Post? 뭐임?

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  //reducer만들때 마다 넣어주는
  user: User,
  post: Post,
  router: connectRouter(history), // 리덕스에도 history쓴다며 history를 넣게 되면 우리가 만든 history랑 router가 연결되는거임
});

//reducer를 바로 실행하기 전에 액션이 실행되고, reducer실행 사이의 단계를 놓을 수 있다.
//예를 들어 액션이 실행되고 API요청을 갔다온다던가 setimeout으로 뭔가를 한다던가
//비동기작업들을 하고 thunk에 태운다
const middlewares = [thunk.withExtraArgument({ history: history })]; //내가 사용할 middleware를 넣으면 됨.

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === 'development') {
  const { logger } = require('redux-logger'); //import를 안쓰고 require을 써 크기를 낮춘다.
  middlewares.push(logger);
}
//브라우저가 열린 상황에서만 작동하라.
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
//미드웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//미들웨어 묶어서 만들어 줬어용.
let store = initialStore => createStore(rootReducer, enhancer);

//함수명이 아니고 함수()네? 그럼 실행 되겄지 -> 뭔말이야
export default store();
