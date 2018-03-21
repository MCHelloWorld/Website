import React from 'react';
import ReactDOM from 'react-dom';
import './user/index.css';
import User from './user/User';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UploadScreen from './user/UploadScreen';
import Home from './components/Home.js';
import Secret from './components/Secret.js';
import Constant from './components/util/Constant.js';

const Root = () => {
  return (
  <BrowserRouter>
    <div>
      <Switch>
          <Route exact path={Constant.HOME_PATH} component={Home} title="Home"/>
          <Route exact path='/User' component={User} title="User" />
          <Route exact path={Constant.SECRET_PATH} component={Secret} title="Secret"/>
          <Route exact path="/LoginSuccess" component={UploadScreen} />
          {/*<Route exact path='*' component={NotFound} />*/}
        </Switch>
      </div>
    </BrowserRouter>
  )
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
