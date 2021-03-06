import React, { Component } from "react";
import logo from "../css/images/logo.png";
import banner from "../css/images/banner.png";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton"

// Default header for use in other pages on our site. Uses
// Google's Material UI for the AppBar.
class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <div className="alright">
        <MuiThemeProvider>
          <AppBar title="Hello World" style={{ backgroundColor: "#478fcd" }}
          iconElementRight={
            <FlatButton href='/User'>Log In</FlatButton>
          }/>
        </MuiThemeProvider>
      </div>
    );
  }
}


class HelloHeader extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
        <header
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            minHeight: "30vh",
            display: "flex"
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ height: 160, width: 160, margin: "auto" }}
          />
        </header>
      </div>
    );
  }
}

export default HelloHeader;
