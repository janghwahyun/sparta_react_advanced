import React,  from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'connect-react-router';

import Grid from ../components/Grid
import Header from '../components/Header';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid>
          <Routes>
            <Header></Header>
            <Route path="/" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </>
  );
}

export default App;
