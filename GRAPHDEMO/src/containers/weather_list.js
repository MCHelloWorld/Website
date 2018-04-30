import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log("cityData", cityData);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="Weekly" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="Monthly" />
        </td>
        <td>
          <Chart data={humidities} color="black" units="Semester" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Example of a Personalized Image</th>
            <th>Weekly</th>
            <th>Monthly</th>
            <th>Semester</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

/* 🅃🄷🄸🅂 🄵🅄🄽🄲🅃🄸🄾🄽 🄸🅂 🅃🄷🄴 🅂🄰🄼🄴 🄰🅂 🄱🄴🄻🄾🅆
function mapStateToProps(state.weather) {
  return { weather: state.weather };
}
🅃🄷🄴 🄳🄸🄵🄵🄴🅁🄴🄽🄲🄴 🄸🅂 🄵🄰🄽🄲🅈 🄴🅂6 🅂🅈🄽🅃🄰🅇 */
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
