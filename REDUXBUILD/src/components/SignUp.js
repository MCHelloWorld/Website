import React, { Component } from "react";
import { connect } from "react-redux"; //𝕿𝖍𝖎𝖘 is for connecting React w/ Redux
import * as actions from "../actions"; //𝕿𝖍𝖎𝖘 is for the actions

import ErrorMessage from "./ErrorMessage";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      error: ""
    };

    this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  async onSignUpSubmit(event) {
    event.preventDefault();

    const {
      first_name,
      last_name,
      email,
      password,
      password_confirm
    } = this.state;
    const payload = {
      first_name,
      last_name,
      email,
      password,
      password_confirm
    };

    var fuck = await this.props.localSignUp(payload);

    console.log(fuck);

    if (!this.props.error.success) {
      const error = this.props.error.message;
      return this.setState({ error });
    }

    // await this.props.localerror({ email, password });

    this.props.fetchUser();
  }

  onInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    console.log(this);
    return (
      <div className="container">
        <ErrorMessage
          display={!!this.props.error ? !this.props.error.success : false}
          error={this.props.error ? this.props.error.message : "none"}
          desc="well darn..."
          links={[{ href: "/SignUp", content: "Have you signed up?" }]}
        />
        <form onSubmit={this.onSignUpSubmit} method="post" className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="first_name"
                type="text"
                className="validate"
                value={this.state.first_name}
                onChange={this.onInputChange}
              />
              <label htmlFor="first_name">
                {this.state.first_name ? this.state.first_name : "First Name"}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="last_name"
                type="text"
                className="validate"
                value={this.state.last_name}
                onChange={this.onInputChange}
              />
              <label htmlFor="email">
                {this.state.last_name ? this.state.last_name : "Last Name"}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={this.state.email}
                onChange={this.onInputChange}
              />
              <label htmlFor="email">
                {this.state.email ? this.state.email : "Email"}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                value={this.state.password}
                onChange={this.onInputChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password_confirm"
                type="password"
                className="validate"
                value={this.state.password_confirm}
                onChange={this.onInputChange}
              />
              <label htmlFor="password_confirm">Confirm Password</label>
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

function mapStateToProps({ error }) {
  return { error };
}

export default connect(mapStateToProps, actions)(SignUp);
