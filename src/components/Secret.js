import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../css/images/logo.png';
import exampleSentanceImage from '../css/images/example-sentance.png';
import calculatedPicture from '../css/images/calculated-picture.png';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class Secret extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UH-OH YOU JUST MADE IT TO THE SECRET PAGE</h1>
          <Link to="/" className="App-title">click here to go back</Link>
        </header>
      </div>
    );
  }
}

export default Secret;
