import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import Login from './Login.js';
import Secret from './Secret.js';
import Special from './Special.js';
import NotFound from './NotFound.js';
import User from '../user/User.js';
import Constant from '../utils/Constant.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.setAppState = this.props.setAppState.bind(this);
    this.state = this.props.appState;
    this.setAppState = this.props.setAppState;
    console.log("State from App.js:")
    console.log(this.state);
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path={Constant.HOME_PATH} component={Home} />
            <Route exact path='/Login' component={Login}  />
            <Route exact path='/User' component={User} />
            <Route exact path='/Secret' component={Secret} />
            <Route exact path='/Special' component={Special} />
            <Route exact path='*' component={NotFound} />
          </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
