import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // App bileşeni bağlanıyor
import "./index.css"; // Global CSS (isteğe bağlı)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
