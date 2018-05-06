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
import Login from "./Login";
import SignUp from "./SignUp";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

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
