import React, { Component } from "react";
import { Link } from "react-router-dom";

class Secret extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            UH-OH YOU JUST MADE IT TO THE SECRET PAGE
          </h1>
          <Link to="/" className="App-title">
            Click here to go to the homepage
          </Link>
        </header>
      </div>
    );
  }
}

export default Secret;
