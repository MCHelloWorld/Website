import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../css/images/logo.png';


class HelloHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello, World!<br />Computer Science Club</h1>
        <br />
      </header>
    );
  }
}

export default HelloHeader;
