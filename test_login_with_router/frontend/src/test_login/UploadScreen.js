import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Redirect} from 'react-router-dom';

class UploadScreen extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      first_name:'',
      last_name:'',
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title={"Welcome, " + this.state.email}/>
            <h1> Here's the profile page. It's the best we have. Sorry :(</h1>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default UploadScreen;
