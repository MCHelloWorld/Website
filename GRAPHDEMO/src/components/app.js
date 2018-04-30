import React, { Component } from "react";

import SearchBar from "../containers/search_bar";
import WeatherList from "../containers/weather_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="http://localhost:3000/">Main Site</a>
          <a href="http://localhost:3001/">React Redux</a>
          <a href="http://localhost:8080/">Proof of Concept</a>
        </header>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
