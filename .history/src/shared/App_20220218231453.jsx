import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import { Grid } from '../elements/Index';
import Header from '../components/Header';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import { actionCreators as userActions } from '../redux/modules/user';
import dispatch from 'react-redux';

function App() {
  const dispatch = dispatch();

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
    </>
  );
}

export default App;
