import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Secret from './Secret.js';
import Login from './Login.js';
import Register from './Registration.js';
import Profile from './ProfilePage.js'
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
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
