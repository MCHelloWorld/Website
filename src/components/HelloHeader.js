import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../css/images/logo.png';
import calculatedPicture from '../css/images/calculated-picture.png';
import exampleSentanceImage from '../css/images/example-sentance.png';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class HelloHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello, World!<br />Computer Science Club</h1>
      </header>
    );
  }
}

export default HelloHeader;
