import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav'

import Login from './Login'
import ShoppingList from './ShoppingList'

class App extends React.Component {
  render () {
    return (

      <React.Fragment>
        <Nav />
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/main" render={() => <ShoppingList />} />
      </React.Fragment>
    )
  }
}

export default App
