import React, { Component } from 'react'
import './User.css'
import LoginScreen from './LoginScreen'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginPage: [],
      uploadScreen: [],
    }
  }

  componentWillMount() {
    var loginPage = []
    loginPage.push(<LoginScreen parentContext={this} />)
    this.setState({
      loginPage: loginPage,
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    )
  }
}
export default User
