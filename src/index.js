import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import AppState from './AppState.js';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App.js';

var Root = () => {
  return (
    <AppState>
      <App/>
    </AppState>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
