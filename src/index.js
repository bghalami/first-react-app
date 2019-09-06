import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes"

ReactDOM.render(
  (<BrowserRouter>
    <Router history={browserHistory} routes={routes} />
  </BrowserRouter>),
  document.getElementById("root")
);
