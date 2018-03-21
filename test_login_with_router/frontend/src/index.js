import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UploadScreen from './UploadScreen';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/LoginSuccess" component={UploadScreen} />
          {/*<Route exact path='*' component={NotFound} />*/}
        </Switch>
      </div>
    </BrowserRouter>
  )
}




ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
