import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { history } from '../redux/configureStore';
import { ConnectedRouter } from 'connected-react-router';

import { Grid } from '../elements/Index';
import Header from '../components/Header';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      {/* <Grid> */}
        {/* <Header></Header> */}
        <ConnectedRouter history={history}>
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;
