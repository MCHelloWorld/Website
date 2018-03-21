import React from 'react';
import ReactDOM from 'react-dom';
import './test_login/index.css';
import App from './test_login/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UploadScreen from './test_login/UploadScreen';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"
          <Route exact path="/User" component={App} />
          <Route exact path="/LoginSuccess" component={UploadScreen} />
          {/*<Route exact path='*' component={NotFound} />*/}
        </Switch>
      </div>
    </BrowserRouter>
  )
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
