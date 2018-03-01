import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../css/images/logo.png';


class Register extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign Up</h1>
      </header>
      <br />
        <form id="form1">First Name:  <input type="text" placeholder="First Name"/>
        <br />
        Last Name:  <input type="text" placeholder="Last Name"/>
        <br />
        Email:  <input type="text" placeholder="Email"/>
        <br />
        Username:  <input type="text" placeholder="Username"/>
        <br />
        <br />
        </form>
        <button type="submit" form="form1">Register</button>
        <br />
        <Link to="/" className="App-title">Home Page</Link>
      </div>
    )
  }
}

export default Register;
