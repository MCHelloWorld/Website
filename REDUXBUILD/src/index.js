// src/index.js
/* ========================================================================== ~\
|  IMPORTS
\* ========================================================================== */
import "materialize-css/dist/css/materialize.min.css"; //𝕿𝖍𝖎𝖘 is needed for the material design css file
import "materialize-css/dist/js/materialize.min.js"; //𝕿𝖍𝖎𝖘 is needed for the material design js file
import React from "react"; //𝕿𝖍𝖎𝖘 is needed for React
import ReactDOM from "react-dom"; //𝕿𝖍𝖎𝖘 is for dom manipulation in react
import { Provider } from "react-redux"; //𝕿𝖍𝖎𝖘 is for integrating React with Redux
import { createStore, applyMiddleware } from "redux"; //𝕿𝖍𝖎𝖘 is for Redux, and Redux middleware
import reduxThunk from "redux-thunk"; //𝕿𝖍𝖎𝖘 allows us to manually dispatch an action TODO: make this more clear
import reducers from "./reducers"; //𝕿𝖍𝖎𝖘 is for the reducers
import App from "./components/App"; //𝕿𝖍𝖎𝖘 is for the React Application itself

/* ========================================================================== ~\
|  CREATE STORE AND RENDER TO THE DOM
\* ========================================================================== */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, //🄿🅁🄾🅅🄸🄳🄴🅁 connects react with redux and links the store
  document.querySelector("#root") //ℌ𝔢𝔯𝔢 chooses an elem to display the App
);
