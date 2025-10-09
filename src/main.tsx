import React from "react";
import ReactDOM from "react-dom/client";
import "./locales/i18n";
import App from "./app";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
