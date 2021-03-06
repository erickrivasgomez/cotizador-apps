import React from 'react';
import './App.css';
import Home from './components/Home'
import Questions2 from './components/Questions2'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/questions' component={Questions2}/>
        </Switch>
        </BrowserRouter>

  );
}

export default App;
