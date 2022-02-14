import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

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
      <Route path="/" element={<PostList />} />
      {/* <Grid>
        <Header></Header>
        <ConnectedRouter history={history}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          </ConnectedRouter>
        </Routes>
      </Grid> */}
    </>
  );
}

export default App;
