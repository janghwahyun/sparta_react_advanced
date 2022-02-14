import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Header from '../components/Header';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Login />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
