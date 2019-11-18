import React from 'react'
import { Segment, Header, Image, Container} from 'semantic-ui-react'

import Login from './Login'

class App extends React.Component {
  render () {
    return (
      <div>
      <Segment style={{
        display: 'inline-block',
        backgroundImage: `url(${"/images/welcome.jpg"})`,
         backgroundSize: 'cover',

        zIndex: -1
    }}>
        <Container style={{
        display: 'inline-block',
        backgroundColor: 'white',
        margin: '35px',
        padding: '35px'
    }}> 
        <Header as='h1'>Welcome to <span>PLANtry</span></Header>
        <Login />
      </Container>
       
     
      </Segment>
     
      </div>
    )
  }
}

export default App
