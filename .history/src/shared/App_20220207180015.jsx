import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" element={<PostList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
