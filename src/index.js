import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Members from './views/members'
import Home from './views/home'
import Videos from './views/videos'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Members} exact path="/members" />
        <Route component={Home} exact path="/" />
        <Route component={Videos} exact path="/videos" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
