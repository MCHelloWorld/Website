import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

var editMessage = '';

class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:this.props.userEmail,
      first_name:'',
      last_name:'',
      bio:'',
      password:'',
      confirm:''
    }
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:5000/api/";
    self = this;
    var payload = {
      "email":this.state.email,
      "first_name":this.state.first_name,
      "last_name":this.state.last_name,
      "bio":this.state.bio,
      "password":this.state.password
    };
    
    if (payload.first_name.length <= 0) {
      alert("First name cannot be blank.");
    } else if (payload.last_name.length <= 0) {
      alert("Last name cannot be blank.");
    } else if (payload.password <= 0) {
      alert("New Password cannot be blank.");
    } else if (payload.password !== this.state.confirm) {
      alert("Passwords do not match.");
    } else if (payload.password.length < 6) {
      alert("New Password must be longer than 6 characters.");
    } else {
      axios.post(apiBaseUrl+'user/edit', payload)
      .then(function(response) {
        console.log(response);
        if(response.data.code===100) {
          console.log("Login Successful")
          editMessage = "Information saved!"
        } else if (response.data.code===104) {
          console.log("New password cannot match old password")
          alert("Your new password cannot be your old password!");
        }
      }
    }
  }

  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar title={this.props.userEmail}/>
      <h1>Welcome, {this.props.userEmail} </h1>
      <br />
      <TextField
        hintText="Edit your first name."
        floatingLabelText="First name"
        onChange = {(event,newValue) => this.setState({first_name:newValue})}
        />
      <br/>
      <TextField
        hintText="Edit your last name."
        floatingLabelText="Last name"
        onChange = {(event,newValue) => this.setState({last_name:newValue})}
        />
      <br/>
      <TextField
      type="password"
        hintText="Edit your password."
        floatingLabelText="Password"
        onChange = {(event,newValue) => this.setState({password:newValue})}
        />
      <br/>
      <TextField
      type="password"
        hintText="Confirm your new password."
        floatingLabelText="Confirm Password"
        onChange = {(event,newValue) => this.setState({confirm:newValue})}
        />
      <br/>
      <TextField
        hintText="Edit your bio."
        floatingLabelText="Bio"
        rows=4
        rowsMax=8
        onChange = {(event,newValue) => this.setState({bio:newValue})}
        />
      <br/>
      <h2>{editMessage}</h2>
      <br/>
      <RaisedButton label="Save Changes" primary={true} onClick={(event) => this.handleClick(event)}/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default UploadScreen;
