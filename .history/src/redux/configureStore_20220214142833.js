import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import User from './modules/user';

const rootReducer = combineReducers({
  //reducer만들때 마다 넣어주는
  user: User,
});

const middlewares = [thunk]; //내가 사용할 middleware를 넣으면 됨.

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
