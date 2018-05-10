// src/reducers/loginReducer.js
// controls the login part of the app state

import { LOCAL_LOGIN } from "../actions/TYPES";

export default function(state = null, action) {
  switch (action.type) {
    case LOCAL_LOGIN:
      return action.payload || false;
    default:
      return state;
  }
}
