import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import Login from './components/Login'
import axios from 'axios'

const App = () => {
  const [events, setEvents] = useState([0])
  const padding = {
    padding: 5
  }

  return (
      <div className="container">
        <h1>Tulospalvelu</h1>
        <Login />
      </div>
  )
}

export default App
