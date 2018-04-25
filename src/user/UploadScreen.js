import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import logo from "../css/images/logo.png";
import banner from "../css/images/banner.png";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import IconButton from "material-ui/IconButton";
import SettingsIcon from "material-ui/svg-icons/action/settings";
//import ImageUploader from './ImageUploader';
import Globe from "../css/images/globe.png";
var status = "hidden";

// Primary user profile page
class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Receives user's data from loginroutes.js response object,
      email: this.props.userEmail, // which was sent to Loginscreen.js and set as props on that component.
      first_name: this.props.first,
      last_name: this.props.last,
      bio: this.props.bio,
      admin: this.props.admin,
      picSource: this.props.picSource,
      password: "",
      confirm: "",
      edit: false,
      file: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  editClick(event) {
    this.setState({ edit: !this.state.edit });
    if (status === "visible") {
      status = "hidden";
    } else if (status === "hidden") {
      status = "visible";
    }
  }

  handleFile(event) {
    console.log("File Handled");
  }

  onClick(event) {

  }

  handleClick(event) {
    // Sends edited user information as an API request
    var apiBaseUrl = "http://localhost:5000/api/";
    // eslint-disable-next-line
    var self = this;
    var payload = {
      email: this.state.email
    };

    if (this.state.first_name.length > 0)
      payload.first_name = this.state.first_name;
    if (this.state.last_name.length > 0)
      payload.last_name = this.state.last_name;
    if (this.state.bio.length > 0) payload.bio = this.state.bio;
    if (
      this.state.password !== 0 &&
      this.state.password > 6 &&
      this.state.password === this.state.confirm
    )
      payload.password = this.state.password;

    if (this.state.password.length !== 0 && this.state.password < 6)
      alert("Password must be more than 6 characters.");
    if (
      this.state.password.length !== 0 &&
      this.state.password !== this.state.confirm
    )
      alert("Passwords do not match.");

    axios
      .post(apiBaseUrl + "user/edit", payload)
      .then(function(response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Update Successful");
          self.setState({ edit: false });
          status = "hidden";
          alert("Information saved!");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <AppBar
            title="Profile Page"
            iconElementLeft={
              <IconButton
                tooltip="Edit your profile"
                tooltipPosition="bottom-right"
              >
                <SettingsIcon />
              </IconButton>
            }
            onLeftIconButtonClick={event => this.editClick(event)}
          />
          <header
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              minHeight: "30vh",
              display: "flex"
            }}
          >
            <img
              className="App-logo"
              src={logo}
              alt="logo"
              style={{ height: 160, width: 160, margin: "auto" }}
            />
          </header>
          <br />
          <img
            src={Globe}
            alt="profile pic"
            style={{ height: 140, width: 140, margin: "auto" }}
          />

          <h1>
            Welcome, {this.props.first} {this.props.last}!{" "}
          </h1>
          <h2>{this.props.userEmail}</h2>
          <p>
            <u style={{ color: "#262262" }}>Bio:</u>&nbsp;&nbsp;{this.props.bio}{" "}
          </p>
          <RaisedButton
            containerElement="label"
            label="Upload Profile Picture"
            style={{visibility: status}}
            onClick={event => this.onClick(event)}
          >
            <input type="file" accept=".png,.jpg"
            onChange={(event, newFile) => this.setState({file: newFile})}/>
          </RaisedButton>
          <br/>
          <TextField
            hintText="Edit your first name."
            floatingLabelText="First name"
            onChange={(event, newValue) =>
              this.setState({ first_name: newValue })
            }
            style={{ visibility: status }}
          />
          <br />
          <TextField
            hintText="Edit your last name."
            floatingLabelText="Last name"
            onChange={(event, newValue) =>
              this.setState({ last_name: newValue })
            }
            style={{ visibility: status }}
          />
          <br />
          <TextField
            type="password"
            hintText="Edit your password."
            floatingLabelText="New Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
            style={{ visibility: status }}
          />
          <br />
          <TextField
            type="password"
            hintText="Confirm your new password."
            floatingLabelText="Confirm Password"
            onChange={(event, newValue) => this.setState({ confirm: newValue })}
            style={{ visibility: status }}
          />
          <br />
          <TextField
            hintText="Edit your bio."
            floatingLabelText="Bio"
            multiLine={true}
            rowsMax={8}
            onChange={(event, newValue) => this.setState({ bio: newValue })}
            style={{ visibility: status }}
          />
          <br />
          <RaisedButton
            label="Save Changes"
            primary={true}
            onClick={event => this.handleClick(event)}
            style={{ visibility: status }}
          />
          <br />
        </MuiThemeProvider>
        <br />
        <br />
      </div>
    );
  }
}

export default UploadScreen;
