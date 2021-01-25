import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import Authentication from "./containers/Auth";

ReactDOM.render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>,
  document.getElementById("root")
);
