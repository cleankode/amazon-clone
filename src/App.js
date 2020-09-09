import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./coomponents/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
