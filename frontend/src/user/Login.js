import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import UploadScreen from './UploadScreen';
import logo from '../css/images/logo.png';
import banner from '../css/images/banner.png';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
    email:'',
    password:''
  }
}

getChildContext() {
  return {
    email:this.state.email
  };
}

handleClick(event){
  var apiBaseUrl = "http://localhost:5000/api/";
  var self = this;
  var payload = {
    "email":this.state.email,
    "password":this.state.password,
    "mySpecialGuy": 'hi there i\'m special'
  };

  axios.post(apiBaseUrl+'login', payload)
  .then(function (response) {
    console.log(response);
    if(response.data.code === 200){
      console.log("Login successful");
      var uploadScreen=[];
      uploadScreen.push(<UploadScreen appContext={self.props.appContext} userEmail={payload.email}/>)
      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen});
    } else if (response.data.code === 204) {
      console.log("Username password do not match");
      alert(response.data);
    } else {
      console.log("Username does not exist");
      alert(response.data);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <header style={{backgroundImage: `url(${banner})`, backgroundSize: "cover", minHeight: "30vh", display: 'flex'}}>
           <img src={logo} alt="logo" style={{height: 160, width: 160, margin: 'auto'}}/>
           </header>
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
            type='password'
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};
export default Login;
