import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Secret from './Secret.js';
import Login from './login/Login.js';
import Register from './Registration.js';
import Profile from './ProfilePage.js'
import NotFound from './NotFound.js';
import Constant from './util/Constant.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={username:'user',
                password:'password'};

    this.login.bind(this);
  }
  login = function(name, pw){
    this.changeState({username:name,
                password:pw});
  }
  render() {

    return (
      <BrowserRouter>
          <Switch>
            <Route exact path={Constant.HOME_PATH} component={Home} />
            <Route exact path={Constant.LOGIN_PATH} component={Login}  username={this.state.username} password={this.state.password} />
            <Route exact path={Constant.SECRET_PATH} component={Secret} />
            <Route exact path={Constant.REGISTRATION_PATH} component={Register} />
            <Route exact path={Constant.PROFILE_PAGE_PATH} component={Profile} />
            <Route exact path='*' component={NotFound} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
