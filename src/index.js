import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import AppState from "./AppState.js";
import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App.js";

// Root file for our web application
var Root = () => {
  return (
    <AppState>
      <header>
        <a href="http://localhost:3000/">Main Site</a>
        <a href="http://localhost:3001/">React Redux</a>
        <a href="http://localhost:8080/">Proof of Concept</a>
      </header>
      <App />
    </AppState>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
