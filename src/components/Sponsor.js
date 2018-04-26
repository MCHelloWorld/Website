import React, { Component } from "react";
import HelloHeader from "./HelloHeader.js";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <MuiThemeProvider>
      <div className="App">
      <HelloHeader/>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default Sponsor;
