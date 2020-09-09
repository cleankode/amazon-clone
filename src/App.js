import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./coomponents/Header";
import Home from "./coomponents/Home";
import Checkout from "./coomponents/Checkout";
import Login from "./coomponents/Login";
import Returns from "./coomponents/Returns";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/returns">
          <Header />
          <Returns />
          </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
