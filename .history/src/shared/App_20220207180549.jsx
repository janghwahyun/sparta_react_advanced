import './App.css';
import { BrowserRouter, Route, Routes, Swith } from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Swith>
          <Routes>
            <Header />
            <Route path="/" element={<PostList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Swith>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
