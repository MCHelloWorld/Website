// src/components/App.js
// sets up React Router for the application
/* ========================================================================== ~\
|  IMPORTS
\* ========================================================================== */
import React, { Component } from "react"; //𝕿𝖍𝖎𝖘 is for React
import { BrowserRouter, Route, Redirect } from "react-router-dom"; //𝕿𝖍𝖎𝖘 is for for URL routing
import { connect } from "react-redux"; //𝕿𝖍𝖎𝖘 is for connecting React w/ Redux
import * as actions from "../actions"; //𝕿𝖍𝖎𝖘 is for the actions

import Header from "./Header";
import Landing from "./Landing";
import Login from "./Login";
import SignUp from "./SignUp";
import About from "./About";
import Contact from "./Contact";
import Alumni from "./Alumni";
import Members from "./Members";

const Profile = () => <h2>Profile Yo</h2>;

/* ========================================================================== ~\
|  DEFINE URL ROUTES FOR THE APP
\* ========================================================================== */
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    /* ====================================================================== ~\
    |  DEFINE PRIVATE ROUTES FOR THE APP
    \* ====================================================================== */
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth || this.props.auth === null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    /* ====================================================================== ~\
    |  DEFINE PUBLIC ROUTES FOR THE APP
    \* ====================================================================== */
    const PublicRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          !this.props.auth || this.props.auth === null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/profile",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );

    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <header>
              <a href="http://localhost:3000/">Main Site</a>
              <br />
              <a href="http://localhost:3001/">React Redux</a>
            </header>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Contact/Alumni" component={Alumni} />
            <Route exact path="/Contact/Members" component={Members} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/SignUp" component={SignUp} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
