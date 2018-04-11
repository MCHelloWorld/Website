import React, {Component} from 'react';
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
        <form id="form1">First Name:  <input type="text" name='first_name' placeholder="First Name"/>
          <br />
          Last Name:  <input type="text" name='last_name' placeholder="Last Name"/>
          <br />
          Email:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name='email' placeholder="Email"/>
          <br />
          Username:  &nbsp;<input type="text" name='username' placeholder="Username"/>
          <br />
          Password: &nbsp;<input type="password" name='password' placeholder='Password'/>
          <br />
        </form>
        <br />
        <button type="submit" form="form1" variant="raised" color="primary" linkButton={true}>Register</button>
        <br />
        <br />
        <button href="/" variant="raised" color="primary" linkButton={true}>Home</button>
      </div>
    )
  }
}

export default Register;
