// src/actions/index.js
// defines the actions
import axios from "axios";
import { FETCH_USER, LOCAL_LOGIN, LOCAL_SIGNUP } from "./TYPES";

// communicates with our api to fetch date of currently logged in user
export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: response.data });
};

// communicates with our api to fetch data for login
export const localLogin = payload => async dispatch => {
  const response = await axios.post("/auth/local_login", payload);

  dispatch({ type: LOCAL_LOGIN, payload: response.data });
};

// communicates with our api to fetch data for signup
export const localSignUp = payload => async dispatch => {
  const response = await axios.post("/auth/local_signup", payload);

  console.log("signup response".rainbow);

  dispatch({ type: LOCAL_LOGIN, payload: response.data });
};
