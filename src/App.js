import React, { Component } from 'react';
import logo from './img/logo.png';
import exampleSentanceImage from './img/example-sentance.png';
import calculatedPicture from './img/calculated-picture.png';
import './App.css';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, World!<br />Computer Science Club</h1>
        </header>

        <p>I am a calculated {1 + 2 + 3 + 4 + 5 + 6} years old.</p>
        <img src={calculatedPicture} alt="calculated value" style={{height: '64px'}}/>

        <p>{exampleSentance} Neat!</p>
        <img src={exampleSentanceImage} alt="example sentance" style={{height: '64px'}}/>

      </div>
    );
  }
}

export default App;
