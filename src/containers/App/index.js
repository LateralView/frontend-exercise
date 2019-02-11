import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from '../../store'
import { PrivateRoute, OnlyPublicRoute } from '../Routes'

import Notifications from '../Notifications'
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store() }>
        <div>
          <Notifications />
          <Header />
          <Router>
            <div>
              <PrivateRoute exact path="/" component={Home} />
              <OnlyPublicRoute exact path="/login" component={Login} />
              <OnlyPublicRoute exact path="/register" component={Register} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
