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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
