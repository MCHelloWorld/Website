import React, { Component } from "react";
import HelloHeader from "./HelloHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//This is a sponsor page, where users can view current alumni/additional
//sponsors.
const style = {
  margin: 15
};

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <HelloHeader />
          <h1 style={{ "font-size": "50px" }}>Sponsors and Supporters</h1>
          <RaisedButton label="Home" primary={true} style={style} href="/" />
          <div className="curved">
            <h2>Sponsors</h2>
            <p>
              This is where future sponsors will appear, with photos and other
              relevant information.
            </p>
            <br />
            <h2>Contact Us!</h2>
            <p>
              This is where contact information will go for club leadership so
              that potential contributors have a place/person to reach out to.
            </p>
          </div>
        </div>
        <br />
      </MuiThemeProvider>
    );
  }
}

export default Sponsor;
