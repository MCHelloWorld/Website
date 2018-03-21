import React, { Component } from 'react';
import Button from 'material-ui/Button';
import HelloHeader from './HelloHeader.js';
import calculatedPicture from '../css/images/calculated-picture.png';
import exampleSentanceImage from '../css/images/example-sentance.png';
import Constant from './util/Constant.js';

const exampleSentance = "This sentance was stored in a variable within App.js.";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloHeader/>

        <br />

        <Button href="/User" variant="raised" color="primary" linkButton={true}>Log In</Button>
        &nbsp;&nbsp;&nbsp;
        <Button href={Constant.REGISTRATION_PATH} variant="raised" color="primary" linkButton={true}>Sign Up</Button>
        &nbsp;&nbsp;&nbsp;
        <Button href={Constant.PROFILE_PAGE_PATH} variant="raised" color="primary" linkButton={true}>Profile</Button>
        <br/>
        <p>I am a calculated {1 + 2 + 3 + 4 + 5 + 6} years old.</p>
        <img src={calculatedPicture} alt="calculated value" style={{height: '64px'}}/>

        <p>{exampleSentance} Neat!</p>

        <img src={exampleSentanceImage} alt="example sentance" style={{height: '64px'}}/>
        <br/>

        <h1>Events</h1>
        <p>Future events will go here!</p>
        <h1>OpenKattis Leaderboard</h1>
        <p>OpenKattis Leaderboard will appear here!</p>
      </div>
    );
  }
}

export default Home;
