import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloHeader from './HelloHeader.js';
import calculatedPicture from '../css/images/calculated-picture.png';
import exampleSentanceImage from '../css/images/example-sentance.png';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloHeader/>
        <p>I am a calculated {1 + 2 + 3 + 4 + 5 + 6} years old.</p>
        <Link to="/Login" className="App-title">Login</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/Registration" className="App-title">Registration</Link><br/>
        <img src={calculatedPicture} alt="calculated value" style={{height: '64px'}}/>

        <p>{exampleSentance} Neat!</p>

        <img src={exampleSentanceImage} alt="example sentance" style={{height: '64px'}}/>
        <br/>

      </div>
    );
  }
}

export default Home;
