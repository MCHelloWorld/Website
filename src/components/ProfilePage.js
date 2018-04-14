import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../css/images/logo.png'
//import userphoto from '../css/images/default.png';

class Profile extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Profile</h1>
        </header>
        <br />
        {/*<img src={userphoto} className="App-profile-photo" alt=""/>*/}
        <br />
        <p>
          This is where the profile page will go. <br />
          This will contain the account's name, username, profile picture, bio,
          and eventually their openKattis score. <br />
          <br />Currently, this page is under construction, and will be
          completed <br />
          as the database instance and Node.js backend code is written.
        </p>
        <br />
        <Link to="/" className="App-title">
          Home Page
        </Link>
      </div>
    )
  }
}

export default Profile
