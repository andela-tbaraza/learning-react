import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import Data from './components/Props.jsx';
// import Comp from './compAPI.jsx';
import Cycle from './components/Cycle.jsx';


ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}/>
    <Route path = "Data" component = {Data} />
    <Route path = "Cycle" component = {Cycle} />

  </Router>), document.getElementById('root'));
// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000)
