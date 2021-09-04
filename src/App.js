import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from '../src/components/Home/Home'
function App() {
  return (
    <Router>
    <Route path='/home' component={Home}/>
    
    <Redirect from='' to='/home'/>
  </Router>

  );
}

export default App;
