import React from 'react'
import { Route } from 'react-router-dom'
import { Segment, Container } from 'semantic-ui-react'

import Login from './Login'
import ShoppingList from './ShoppingList'

class App extends React.Component {
  render () {
    return (
      <div>
        <Segment style={{
          display: 'inline-block',
          backgroundImage: `url(${'/images/welcome.jpg'})`,
          backgroundSize: 'cover',
          zIndex: -1
        }}>
          <Container style={{
            display: 'inline-block',
            backgroundColor: 'white',
            margin: '35px',
            padding: '35px',
            border: '1px'
          }}>
            <Route exact path="/" render ={() => <Login />}/>
            <Route exact path="/main" render={() => <ShoppingList />} />
          </Container>

        </Segment>

      </div>
    )
  }
}

export default App
