import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
/* import pages */
import App from './components/App';
import Secret from './components/Secret';
/* import css */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Secret" component={Secret} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
