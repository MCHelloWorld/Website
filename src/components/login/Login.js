import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../css/images/logo.png';


class Login extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login</h1>
      </header>
      <br />
          <form id="form1">Username:  <input type="text" name='username' placeholder="Username"/>
          <br />
          Password:    <input type="password" name='password' placeholder="Password" />
          </form>
          <br />
          <button type="submit" form="form1" className="form-button">Log in</button>
          <br />
          <br />
          <Link to="/" className="App-title">Home Page</Link>
      </div>
    )
  }
}

export default Login;
