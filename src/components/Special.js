import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// This page contains a lot of test code and unfinished product to be implemented later.
// This code is not currently used in our actual site.
class Special extends Component {
  handleCheckLogin(event) {
    console.log("waggleflaggle");
    var apiBaseUrl = "http://localhost:5000/api/";
    var payload = {};

    cookies.set("myCat", "Pacman", { path: "/" });
    console.log(cookies.get("myCat")); // Pacman

    axios
      .post(apiBaseUrl + "user/status", payload)
      .then(function(response) {
        console.log(response);
        var msg = "";
        if (response.data.code === 200) {
          msg = "data code = 200";
          console.log(msg);
          alert(msg);
        } else if (response.data.code === 204) {
          msg = "data code equals 204";
          console.log(msg);
          alert(msg);
        } else {
          msg = "data code was not 200 or 204";
          // basically do nothing hooorayyyyy
        }
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  handleSpecialClick(event) {
    var apiBaseUrl = "http://localhost:5000/api/";
    var payload = {
      mySpecialGuy: "hi there i'm special"
    };

    axios
      .post(apiBaseUrl + "special", payload)
      .then(function(response) {
        console.log(response);
        var msg = "";
        if (response.data.code === 200) {
          msg = "data code = 200";
        } else if (response.data.code === 204) {
          msg = "data code equals 204";
        } else {
          msg = "data code was not 200 or 204, it was: " + response.data.code;
        }
        console.log(msg);
        alert(msg);
      })
      .catch(function(error) {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            UH-OH YOU JUST MADE IT TO THE SECRET PAGE
          </h1>
          <Link to="/" className="App-title">
            click here to go back
          </Link>
          <br />
          <br />
          <button onClick={event => this.handleSpecialClick(event)}>
            send something to special
          </button>
          <br />
          <button onClick={event => this.handleCheckLogin(event)}>
            CHECK LOGGED IN STATUS
          </button>
        </header>
      </div>
    );
  }
}

export default Special;
