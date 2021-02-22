import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutMe from './screens/AboutMe/AboutMe';
import Home from './screens/Home/Home';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;