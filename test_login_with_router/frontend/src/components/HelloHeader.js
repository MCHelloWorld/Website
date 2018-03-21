import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../css/images/logo.png';

import PropTypes from 'prop-types';
//import Switch from 'material-ui/Switch';
//import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';


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
    //const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="alright">
        {/* HEY!!!!!!!!!!!! This part is used to toggle the log in and log out */}
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
