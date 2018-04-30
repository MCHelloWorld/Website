import React, { Component } from "react";

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div className="mapsclass" ref="map" />;
  }
}
