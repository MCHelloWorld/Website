import React, { Component } from 'react';
import logo from '../css/images/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
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
          <AppBar
            title="Hello World"
           />
        </MuiThemeProvider>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

/*
const style = {
  margin: 15,
};*/

class HelloHeader extends Component {
  render() {
    return (
      <div>
        <MenuAppBar />
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello, World!<br />Computer Science Club</h1>
        <br />
      </header>
      </div>
    );
  }
}

export default HelloHeader;
