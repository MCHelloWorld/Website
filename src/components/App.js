import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home.js'
import Login from './Login.js'
import Secret from './Secret.js'
import Special from './Special.js'
import NotFound from './NotFound.js'
import User from '../user/User.js'
import Constant from '../utils/Constant.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.setAppState = this.props.setAppState.bind(this)
    this.appState = this.props.appState
    console.log('State from App.js:')
    console.log(this.state)
  }

  render() {
    return (
      <BrowserRouter {...this.props}>
        <Switch {...this.props}>
          <Route
            exact
            path={Constant.HOME_PATH}
            render={() => <Home {...this.props} />}
          />
          <Route exact path="/Login" render={() => <Login {...this.props} />} />
          <Route exact path="/User" render={() => <User {...this.props} />} />
          <Route
            exact
            path="/Secret"
            render={() => <Secret {...this.props} />}
          />
          <Route
            exact
            path="/Special"
            render={() => <Special {...this.props} />}
          />
          <Route exact path="*" render={() => <NotFound {...this.props} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App