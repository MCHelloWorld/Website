import axios from "axios";

const keys = require("../config.js");
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${
  keys.weatherAPI
}`;

// exported as a variable to make it easier to debug errors caused by typos
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
