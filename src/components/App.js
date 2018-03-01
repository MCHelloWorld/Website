import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Secret from './Secret.js';
import Login from './Login.js';
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Secret" component={Secret} />
            <Route path="/Login" component={Login} />
            <Route exact path='*' component={NotFound} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
