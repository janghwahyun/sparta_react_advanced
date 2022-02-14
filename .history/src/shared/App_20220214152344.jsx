import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Grid from '../elements/Grid';
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
          <Routes path="/" element={<PostList />} />
          <Routes path="/login" element={<Login />} />
          <Routes path="/signup" element={<Signup />} />
        </ConnectedRouter>
      </Grid>
    </>
  );
}

export default App;