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
  useEffect(() => {
    axios
        .get('http://localhost:3001/events')
        .then(response => {
          console.log('promise fulfilled!!!')
          setEvents(response.data)
        })
  }, [])

  return (
      <div className="container">
        {/*  */}
        <Router>
          <div>
            <Link style={padding} to="/">login</Link>
            <text>{localStorage.getItem("myUser")}</text>
          </div>

          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>

          <div>
            <i>Esimerkkivalikko </i>
          </div>
        </Router>
      </div>
  )
}

export default App
