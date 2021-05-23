import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Editor from './components/Editor';

function App(){
  return(
    <main>
      <Switch>
        <Route path='/' component={Editor} exact/>
        <Route component={Error} />
      </Switch>
    </main>
  );
}

export default App;
