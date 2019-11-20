import React from 'react'
import { Route } from 'react-router-dom'
import { Segment, Container, Button } from 'semantic-ui-react'

import Login from './Login'
import ShoppingList from './ShoppingList'

class App extends React.Component {
  render() {
    return (
      <div style={{
        height: "100%"
      }}>
        <Segment style={{
          display: 'inline-block',
          backgroundImage: `url(${'/images/welcome.jpg'})`,
          backgroundSize: 'cover',
          width: "100%",
          height: "100%",
          zIndex: -1
        }}>
          <Container style={{
            backgroundColor: 'white',
            margin: 'auto',
            marginTop: '100px',
            padding: '35px',
            border: '1px'
          }}>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/main" render={() => <ShoppingList />} />
          </Container>

        </Segment>

      </div>
    )
  }
}

export default App
