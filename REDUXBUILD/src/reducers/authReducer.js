// src/reducers/authReducer.js
// controls the `auth` part of the app state

import { FETCH_USER } from "../actions/TYPES";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
