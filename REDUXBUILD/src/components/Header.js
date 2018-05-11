// src/components/header.js
// creates the navigation header of the application
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <span>
            <li>
              <a href="/Login">Login</a>
            </li>

            <li>
              <a href="/SignUp">SignUp</a>
            </li>
          </span>
        );
      default:
        return (
          <span>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/api/logout">Logout, {this.props.auth.username}</a>
            </li>
          </span>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left">
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              className="brand-logo"
            >
              Hello World
            </Link>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
