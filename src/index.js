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
import MovieDetail from './Movie/MovieDetail/MovieDetail'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // 1.其实，Redirect是会渲染一个对应的to的组件
  // 2.在Switch组件中，匹配多个,但是只会生成一个大组件。如果没有Switch，凡是Route匹配到的组件都会渲染。
  // 3.虽然router4做了改变，但是依然需要初始化的路由表。页面载入或者刷新都要依赖这个表。
  <Router>
    <Switch>
      <Route path='/movie/detail' component={MovieDetail}></Route>
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
