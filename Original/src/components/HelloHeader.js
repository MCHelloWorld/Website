import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../css/images/logo.png';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
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
        {/*<FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>*/}
        <AppBar position="static">
          <Toolbar>
            <IconButton className="alright" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <img src={logo} style={{"height": "32px","margin": "16px","margin-left":"8px"}} alt="logo" />
            <Typography variant="title" color="inherit" className="alright">
              Hello World
            </Typography>
            {auth && (
              <div style={{"position":"absolute","right":"0"}}>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    containerElement={<Link to="/ProfilePage" />}
                    onClick={this.handleClose}>Profile</MenuItem>
                    {/*Couldnt get this to link to somehwere else for some reason*/}
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
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
