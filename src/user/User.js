import React, { Component } from "react";
import "./User.css";
import LoginScreen from "./LoginScreen";

// This component Loginscreen component, then the profile page, which is
// UploadScreen.js
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    };
  }

  // Sets the correct state when the component is first rendered.
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
