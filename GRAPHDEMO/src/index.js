/* ========================================================================== ~\
|  The following imports are needed for React
\* ========================================================================== */
import React from "react";
import ReactDOM from "react-dom";
/* ========================================================================== ~\
|  The following imports are needed for Redux
\* ========================================================================== */
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
/* ========================================================================== ~\
|  The following imports are middleware needed for Redux
|   (Middleware provides a third-party extension point BETWEEN
|    dispatching an action, and the moment it reaches the reducer)
\* ========================================================================== */
import ReduxPromise from "redux-promise";
/* ========================================================================== ~\
| The following imports are needed for the Main Application & Our Reducers
\* ========================================================================== */
import App from "./components/app"; // Our React App
import reducers from "./reducers"; //  Our Reducers (controls global AppState)

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
