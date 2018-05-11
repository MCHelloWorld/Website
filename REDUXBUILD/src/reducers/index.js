// src/reducers/index.js
/* ========================================================================== ~\
|  IMPORTS
\* ========================================================================== */
//𝕿𝖍𝖊 following import is needed for Redux
import { combineReducers } from "redux";
//𝕿𝖍𝖊 following imports are needed to combine reducer files from src/reducers
import auth from "./authReducer";
import error from "./errorReducer";

/* ========================================================================== ~\
|  COMBINE THE REDUCERS
\* ========================================================================== */
export default combineReducers({ auth, error });

/* ========================================================================== ~\
|  ▁ ▂ ▄ ▅ ▆ ▇ █ HELPFUL QUESTIONS AND ANSWERS █ ▇ ▆ ▅ ▄ ▂ ▁
\* ========================================================================== *

// QUESTION: What is a reducer ?

The reducer is a pure function that takes the previous state and an action,
and returns the next state.

// QUESTION: What do you mean by "state" ?

React and Redux both use the term "state" but THEY DO NOT MEAN THE SAME THING.
IN REACT, state is a property of react components.
IN REDUX, state refers to the global state of the application.

*/
