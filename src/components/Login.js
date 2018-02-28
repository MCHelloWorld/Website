import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../css/images/logo.png';


class Login extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login/Signup</h1>
      </header>
      <br />
          <form>Username:  <input type="text" placeholder="username"/>
          <br />
          Password:    <input type="password" placeholder="password" />
          </form>
          <br />
          <Link to="/" className="App-title">Home Page</Link>
      </div>
    )
  }
}

export default Login;
