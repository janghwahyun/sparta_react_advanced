import reactDom from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostList from '../pages/PostList';
import Login from '../pages/Login';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/Login" element={<Login />} />
          <Login />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
