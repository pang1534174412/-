<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./component/login.jsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/home">
      <App />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Router>,
  document.getElementById("root")
>>>>>>> e41fb7320964f39f8f9f6f2b0048af769f063a0b
);

