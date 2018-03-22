import React, { Component } from 'react';
import HelloHeader from './HelloHeader.js';
// eslint-disable-next-line
import Constant from './util/Constant.js';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 15,
};

class Home extends Component {
  render() {
    return (
      <div className="App">
        <HelloHeader/>

        <br />

        <MuiThemeProvider>
          <div>
            <RaisedButton label="Home" primary={true} style={style} href='/'/>
            <RaisedButton label="User" primary={true} style={style} href='/User'/>
         </div>
        </MuiThemeProvider>
        <br/>
      </div>
    );
  }
}



export default Home;
