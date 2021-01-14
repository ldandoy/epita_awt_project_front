import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import TodoList from './screens/TodoList';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route path="/" exact={true} component={Home} />
        <Route path="/todos" component={TodoList} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
