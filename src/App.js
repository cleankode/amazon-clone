import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./App.css";
import Header from './coomponents/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
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

        {
          /* we NEED React-Router-Dom */
        }
        {
          /* localhost.com/ */
        }
        {
          /* localhost.com/checkout */
        }
        {
          /* localhost.com/login */
        }
export default App;
