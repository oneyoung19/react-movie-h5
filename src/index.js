import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './index.css'
import 'lib-flexible'
import App from './App'
import Movie from './Movie'
import Mall from './Mall'
import Activity from './Activity'
import Mine from './Mine'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 其实，Redirect也是会渲染一个对应的to的组件
  <Router>
    <Switch>
      <Redirect from='/' to='/movie' exact></Redirect>
      <Route path='/' component={App}></Route>
      <Route path='/movie' component={Movie}></Route>
      <Route path='/mall'  component={Mall}></Route>
      <Route path='/activity' component={Activity}></Route>
      <Route path='/mine' component={Mine}></Route>
    </Switch>
  </Router>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
