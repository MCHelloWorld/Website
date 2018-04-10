import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Special extends Component {


  handleClick(event){
    var apiBaseUrl = "http://localhost:5000/api/";
    var payload = {
      "mySpecialGuy": 'hi there i\'m special'
    };

    axios.post(apiBaseUrl+'special', payload)
    .then(function (response) {
      console.log(response);
      var msg = '';
      if(response.data.code === 200){
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
    .catch(function (error) {
      console.log(error);
      alert(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UH-OH YOU JUST MADE IT TO THE SECRET PAGE</h1>
          <Link to="/" className="App-title">click here to go back</Link>
          <br/><br/>
          <button onClick={(event) => this.handleClick(event)}>send something to special</button>
        </header>
      </div>
    );
  }
}

export default Special;
