import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
//ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<App />,(
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

), document.getElementById('app'))
