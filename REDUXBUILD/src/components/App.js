// src/components/App.js
// sets up React Router for the application
/* ========================================================================== ~\
|  IMPORTS
\* ========================================================================== */
import React, { Component } from "react"; //𝕿𝖍𝖎𝖘 is for React
import { BrowserRouter, Route } from "react-router-dom"; //𝕿𝖍𝖎𝖘 is for for URL routing
import { connect } from "react-redux"; //𝕿𝖍𝖎𝖘 is for connecting React w/ Redux
import * as actions from "../actions"; //𝕿𝖍𝖎𝖘 is for the actions

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Login = () => (
  <div className="row">
    <form action="/auth/local_login" method="post" className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input
            id="email"
            type="username"
            name="username"
            className="validate"
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input
            id="password"
            type="password"
            className="validate"
            name="password"
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
      </button>
    </form>
  </div>
);

const SignUp = () => (
  <div className="row">
    <form action="/auth/local_signupa" method="post" className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
      </button>
    </form>
  </div>
);

/* ========================================================================== ~\
|  DEFINE URL ROUTES FOR THE APP
\* ========================================================================== */
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Dashboard} />
            <Route exact path="/profile/new" component={SurveyNew} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
