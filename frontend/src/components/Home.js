import React, { Component } from 'react';
import HelloHeader from './HelloHeader.js';
import Constant from './util/Constant.js';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloHeader/>

        <br />

        <Link to={Constant.LOGIN_PATH}>Log In</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={Constant.REGISTRATION_PATH}>Sign Up</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={Constant.PROFILE_PAGE_PATH}>Profile</Link>
        <br/>
      </div>
    );
  }
}

export default Home;
