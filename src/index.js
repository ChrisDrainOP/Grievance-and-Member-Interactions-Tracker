import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./client/containers/App";
import Authentication from "./client/containers/Auth";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
