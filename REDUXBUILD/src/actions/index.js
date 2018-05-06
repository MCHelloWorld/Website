// src/actions/index.js
// defines the actions
import axios from "axios";
import { FETCH_USER, LOCAL_LOGIN } from "./TYPES";

// communicates with our api to FETCH USER DATA
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: response.data });
};

export const localLogin = payload => async dispatch => {
  const response = await axios.post("/auth/local_login", payload);

  dispatch({ type: LOCAL_LOGIN, payload: response.data });
};
