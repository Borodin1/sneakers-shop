import React from "react";
//React
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

//scss
import "./index.scss";
import "macro-css";

//Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
