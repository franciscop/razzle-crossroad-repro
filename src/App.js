import React from "react";
import Router, { Route, Switch } from "crossroad";
import Home from "./Home";
import "./App.css";

const App = ({ url }) => (
  <Router url={url}>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default App;
