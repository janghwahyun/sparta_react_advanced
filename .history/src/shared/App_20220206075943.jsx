import reactDom from 'react-dom';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import PostList from '../pages/PostList';

function App(props) {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
