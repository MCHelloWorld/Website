import React, { Component } from "react";
import HelloHeader from "./HelloHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = {
  margin: 15
};

// Homepage of our website; will be the main source of inforamtion for users.
class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Props from Home.js:");
    console.log(this.props);

    console.log("State from Home.js:");
    console.log(this.state);
  }

  handleClick(event) {
    this.props.setAppState({ header: { text: "Temporary Text Changed" } });
  }

  render() {
    return (
      <div className="App">
        <HelloHeader />
        <h1>Welcome to Hello, World!</h1>
        <h3>{this.props.appState.header.text}</h3>
        <MuiThemeProvider>
          <div>
            <RaisedButton label="Home" primary={true} style={style} href="/" />
            <RaisedButton
              label="Log In"
              primary={true}
              style={style}
              href="/User"
            />
            <br />
            <RaisedButton
              label="Change Temporary Text"
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
          <hr />
          <h1>What We Do & Who We Are</h1>
          <RaisedButton
            label="FAQ Page"
            primary={true}
            style={style}
            href="/FAQ"
          />
          <RaisedButton
            label="Want to sponsor?"
            primary={true}
            style={style}
            href="/Sponsor"
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;
