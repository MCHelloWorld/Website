import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../css/images/logo.png';
import exampleSentenceImage from '../css/images/example-sentence.png';
import calculatedPicture from '../css/images/calculated-picture.png';

const exampleSentence = "This sentence was stored in a variable within App.js.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, World!<br />Computer Science Club</h1>
        </header>
        <Link to="/secret" className="App-title">SECRET PAGE</Link>
        <br />
        <h2>I am a calculated {1 + 2 + 3 + 4 + 5 + 6} years old.</h2>
        <img src={calculatedPicture} alt="calculated value" style={{height: '64px'}}/>

        <p>{exampleSentence} Neat!</p>
        <img src={exampleSentenceImage} alt="example sentence" style={{height: '64px'}}/>
        <br />
        <Link to="/Login" className="App-title">Log In</Link>
        <br />
        <Link to="/Registration" className="App-title">Register</Link>

      </div>
    );
  }
}

export default App;
