import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import { Grid } from '../elements/Index';
import Header from '../components/Header';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Permit from './Permit';

import { actionCreators as userActions } from '../redux/modules/user';

import { apiKey } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const _session_Key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_Key) ? true : false;

  //유즈이펙트는 컴포넌트 라이프사이클에 컴포넌트 디드마운트랑, 디드 업데이트를 동시에 수행
  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCkeckFB());
    }
  }, []); //대괄호 안에있는 값이 업데이트 될 때, 작동한다. 만약 아무것도 없다면? 한번만 실행된다는 뜻. 즉 componentDidMount역할

  return (
    <>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          {/* signup은 왜 색깔이 다르지? */}
          <Route path="/signup" exact component={Signup} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+">
          글쓰기 버튼
        </Button>
      </Permit>
    </>
  );
}

export default App;
