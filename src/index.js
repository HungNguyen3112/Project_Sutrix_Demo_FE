import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddStaff from './components/staffAdd';
import { rootReducers } from './reducers/index';
import filterStaff from './components/staffFilter';
import ResultFilterComponent from './components/staffResult';
import staffInfoComponent from './components/staffInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './components/login';
import './index.css';

const myStore = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <Router>
      <Switch>
        <Route exact path='/' component={LoginComponent} />
        <Route path='/add' component={AddStaff} />
        <Route path='/edit' component={AddStaff} />
        <Route path='/filterstaff' component={filterStaff} />
        <Route path='/filterResult' component={ResultFilterComponent} />
        <Route path='/staffinfo' component={staffInfoComponent} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
