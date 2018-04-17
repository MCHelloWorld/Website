import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Login from "./Login";
import axios from "axios";
import logo from "../css/images/logo.png";
import banner from "../css/images/banner.png";
import ImageLoader from 'react-image-file';

// Registration component; requires user to enter information
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm: ""
    };
  }
  // Sends entered information as an API request
  handleClick(event) {
    var apiBaseUrl = "http://localhost:5000/api/";
    console.log(
      "values",
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password
    );
    var self = this;
    var payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    var validEmail = false;
    // Checks if entered email is a valid Messiah College email.
    if (payload.email.length > 0) {
      var result = payload.email.match(/@messiah.edu/gi);
      if (result != null) {
        validEmail = true;
      }
    }
    // Verifies information entered cannot be blank or that it meets certain requirements
    if (payload.first_name.length <= 0) {
      alert("First name cannot be blank.");
    } else if (payload.last_name.length <= 0) {
      alert("Last name cannot be blank.");
    } else if (payload.email.length <= 0) {
      alert("Email cannot be blank.");
    } else if (payload.password <= 0) {
      alert("Password cannot be blank.");
    } else if (payload.password !== this.state.confirm) {
      alert("Passwords do not match.");
    } else if (payload.password.length < 6) {
      alert("Password must be longer than 6 characters.");
    } else if (!validEmail) {
      alert("Email is not a valid Messiah email.");
    } else {
      axios
        .post(apiBaseUrl + "/register", payload)
        .then(function(response) {
          console.log(response);
          if (response.data.code === 200) {
            //  console.log("registration successfull");
            var loginscreen = []; // Resets the registration page to show the Login component
            loginscreen.push(
              <Login parentContext={this} appContext={self.props.appContext} />
            );
            var loginmessage = "Not Registered yet? Go to registration";
            self.props.parentContext.setState({
              loginscreen: loginscreen,
              loginmessage: loginmessage,
              buttonLabel: "Register",
              isLogin: true
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <header
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                minHeight: "30vh",
                display: "flex"
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: 160, width: 160, margin: "auto" }}
              />
            </header>
            <TextField
              hintText="Enter your First Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) =>
                this.setState({ first_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              floatingLabelText="Last Name"
              onChange={(event, newValue) =>
                this.setState({ last_name: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Confirm your Password"
              floatingLabelText="Confirm Password"
              onChange={(event, newValue) =>
                this.setState({ confirm: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Register;
