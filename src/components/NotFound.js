import React, { Component } from "react";
import { Link } from "react-router-dom";

// Default "Page not found" component that displays
// when a user submits a bad URL.
class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Um error 404 lol</h1>
          <Link to="/" className="App-title">
            Click here to go to the homepage
          </Link>
        </header>
      </div>
    );
  }
}

export default NotFound;
