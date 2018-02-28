import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Secret from './components/Secret';
import registerServiceWorker from './registerServiceWorker';

/* My Modifications */
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/Secret" component={Secret} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
