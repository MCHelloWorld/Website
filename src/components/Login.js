import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login</h1>
        </header>
        <br />
        <form id="form1">
          Username: <input type="text" name="username" placeholder="Username" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="Password" />
        </form>
        <br />
        <button
          type="submit"
          form="form1"
          variant="raised"
          color="primary"
          linkButtton={true}
        >
          Log in
        </button>
        <br />
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Login;
