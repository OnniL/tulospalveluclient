import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory
} from 'react-router-dom'

import Login from './components/Login'
import Menu from './components/Menu'
import Settings from './components/Settings'
import NewGame from './components/NewGame'
import Statistics from './components/Statistics'
import Players from './components/Players'
import Molkky from './components/Molkky'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const App = () => {
  const history = useHistory();

  return (
      <div className="container">
        <Route path="/login" component={Login}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/newgame" component={NewGame}/>
        <Route path="/statistics" component={Statistics}/>
        <Route path="/players" component={Players}/>
        <Route path="/molkky" component={Molkky}/>


      </div>
  )
}

export default App
