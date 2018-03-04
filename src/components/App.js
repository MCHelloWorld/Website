import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Secret from './Secret.js';
import Login from './login/Login.js';
import Register from './Registration.js';
import Profile from './ProfilePage.js'
import NotFound from './NotFound.js';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/login/Login" component={Login} change={login()} username={this.state.username} password={this.state.password} />
            <Route exact path="/Secret" component={Secret} />
            <Route exact path='/Registration' component={Register} />
            <Route exact path='/ProfilePage' component={Profile} />
            <Route exact path='*' component={NotFound} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
