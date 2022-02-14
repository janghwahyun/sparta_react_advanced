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

function App() {
  return (
    <>
      <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Routes>
            <Route path="/" exact component={PostList} />
            <Route path="/login" exact component={Login} />
            {/* signup은 왜 색깔이 다르지? */}
            <Route path="/signup" exact component={Signup} />
          </Routes>
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;
