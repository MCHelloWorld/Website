import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloHeader from './HelloHeader.js';
import logo from '../css/images/logo.png';
import calculatedPicture from '../css/images/calculated-picture.png';
import exampleSentanceImage from '../css/images/example-sentance.png';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloHeader/>
        <p>I am a calculated {1 + 2 + 3 + 4 + 5 + 6} years old.</p>
        <Link to="/secret" className="App-title">SECRET PAGE</Link>
        <img src={calculatedPicture} alt="calculated value" style={{height: '64px'}}/>

        <p>{exampleSentance} Neat!</p>
        <p> I loke pies they grate </p>
        <img src={exampleSentanceImage} alt="example sentance" style={{height: '64px'}}/>
      </div>
    );
  }
}

export default Home;
