import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/* import css */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (<App/>)
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
