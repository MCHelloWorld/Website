import React, { Component } from "react";
import { connect } from "react-redux"; //𝕿𝖍𝖎𝖘 is for connecting React w/ Redux
import * as actions from "../actions"; //𝕿𝖍𝖎𝖘 is for the actions

import ErrorMessage from "./ErrorMessage";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", error: "" };

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  async onLoginSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    await this.props.localLogin({ email, password });

    if (!this.props.login.success)
      return this.setState({ error: this.props.login.message });

    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <ErrorMessage
          display={this.props.login ? !this.props.login.success : ""}
          error={this.props.login ? this.props.login.message : "none"}
          desc="well darn, "
          links={[{ href: "#asdf", content: "asdf-ify that url" }]}
        />
        <form onSubmit={this.onLoginSubmit} method="post" className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                className="validate"
                name="username"
                value={this.state.email}
                onChange={this.onInputChange}
              />
              <label>{this.state.email ? this.state.email : "Email"}</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
              <label>
                {this.state.password ? this.state.password : "Password"}
              </label>
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
  }
}

function mapStateToProps({ login }) {
  return { login };
}

export default connect(mapStateToProps, actions)(Login);
