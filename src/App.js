import React from 'react';
import {Route, Switch} from 'react-router-dom'

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
