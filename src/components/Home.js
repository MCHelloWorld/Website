import React, { Component } from 'react';
import HelloHeader from './HelloHeader.js';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 15,
};


class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Props from Home.js:")
    console.log(this.props)

    console.log("State from Home.js:")
    console.log(this.state)
  }

  handleClick(event) {
    this.props.setAppState({header: {text: "Temporary Text Changed"}})
  }

  render() {
    return (
      <div className="App">
        <HelloHeader/>
        <br />
        {/* TEMP: REMOVE THIS h1 after the demonstration */}
        <h1>{this.props.appState.header.text}</h1>
        <MuiThemeProvider>
          <div>
            <RaisedButton label="Home" primary={true} style={style} href='/'/>
            <RaisedButton label="User" primary={true} style={style} href='/User'/>
            <br/>
            <RaisedButton label="Change Temporary Text" style={style}
              onClick={event => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
        <br/>
      </div>
    );
  }
}

export default Home;
