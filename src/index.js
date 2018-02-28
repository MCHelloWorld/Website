import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import pages */
import App from './components/App';
import Secret from './components/Secret';
import Login from './components/Login';
import Register from './components/Registration';
import NotFound from './components/NotFound';
/* import css */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Secret" component={Secret} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Register} />
          <Route exact path='*' component={NotFound} />

        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
