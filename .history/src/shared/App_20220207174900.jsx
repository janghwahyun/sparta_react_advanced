import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Header from '../components/Header';
import Signup from '../pages/Signup';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Login />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
