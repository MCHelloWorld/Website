import React, { Component } from "react";
import "./User.css";
import LoginScreen from "./LoginScreen";

// This component displays the assigned login page component, either Login or Register
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<LoginScreen parentContext={this} />);
    this.setState({
      loginPage: loginPage
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
export default User;
