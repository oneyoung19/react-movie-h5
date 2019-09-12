import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './index.css'
import 'lib-flexible'
import App from './App'
import Mall from './Mall'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    {/* <Switch> */}
      <Route path='/' component={App}></Route>
      <Redirect to='/movie'></Redirect>
      {/* <Route path='/mall' component={Mall}></Route> */}
    {/* </Switch> */}
  </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
