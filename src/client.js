import App from "./App";
import Router from "crossroad";
import React from "react";
import { hydrate } from "react-dom";

hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
