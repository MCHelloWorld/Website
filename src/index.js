import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<<<<<<< HEAD
import Secret from './components/Secret';
import Login from './components/Login';
import Register from './components/Registration';
import NotFound from './components/NotFound';
=======
>>>>>>> 0b85fd575533b5f8c133e2264c63b77ebfe9f54b
/* import css */
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
<<<<<<< HEAD
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
=======
  return (<App/>)
>>>>>>> 0b85fd575533b5f8c133e2264c63b77ebfe9f54b
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
