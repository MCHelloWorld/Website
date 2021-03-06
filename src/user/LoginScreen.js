import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "./Login";
import Register from "./Register";

// Establishes which component, login or registration, will be rendered.
// Also displays a dynamically rendered message instructing the user what to do.
class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "test",
      loginscreen: [],
      loginmessage: "",
      buttonLabel: "Register",
      isLogin: true
    };
  }

  handleClick(event) {
    var loginmessage;
    var loginscreen = [];
    if (this.state.isLogin) {
      loginscreen.push(
        <Register parentContext={this} appContext={this.props.parentContext} />
      );
      loginmessage = "Already registered? Go to Login";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      loginscreen.push(
        <Login
          parentContext={this}
          appContext={this.props.parentContext}
          userEmail={this.state.userEmail}
        />
      );
      loginmessage = "Not Registered yet? Go to registration";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  }

  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    var loginmessage = "Not registered yet? Go to registration";
    this.setState({
      loginscreen: loginscreen,
      loginmessage: loginmessage
    });
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton
                label={this.state.buttonLabel}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
              <RaisedButton
                label="Home"
                primary={true}
                style={style}
                href="/"
              />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Loginscreen;
