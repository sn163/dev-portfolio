import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.NEXT_PUBLIC_BASE_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
