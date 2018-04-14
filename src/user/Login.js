import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import UploadScreen from './UploadScreen'
import logo from '../css/images/logo.png'
import banner from '../css/images/banner.png'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  getChildContext() {
    return {
      email: this.state.email,
    }
  }

  handleClick(event) {
    var apiBaseUrl = 'http://localhost:5000/api/'
    var self = this
    var payload = {
      email: this.state.email,
      password: this.state.password,
    }

    axios
      .post(apiBaseUrl + 'login', payload)
      .then(function(response) {
        console.log(response)
        if (response.data.code === 200) {
          console.log('Login successful')
          var uploadScreen = []
          var iSource = response.data.pic
          uploadScreen.push(
            <UploadScreen
              appContext={self.props.appContext}
              userEmail={response.data.email}
              first={response.data.first}
              last={response.data.last}
              picSource={iSource}
              bio={response.data.bio}
              admin={response.data.admin}
            />
          )
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: uploadScreen,
          })
        } else if (response.data.code === 204) {
          console.log('Username password do not match')
          alert('Username and password do not match')
        } else {
          console.log('Username does not exist')
          alert('Username does not exist')
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" showMenuIconButton={false} />
            <header
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                minHeight: '30vh',
                display: 'flex',
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ height: 160, width: 160, margin: 'auto' }}
              />
            </header>
            <TextField
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin: 15,
}
export default Login