import React, { Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class UploadScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <MuiThemeProvider>
      <AppBar title={this.props.userEmail}/>
      <h1>Howdy Doody, {this.props.userEmail} </h1>
      <br />
      <RaisedButton label="Edit Profile" primary={true}/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default UploadScreen;
