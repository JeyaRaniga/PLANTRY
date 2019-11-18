import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import ListItem from './ListItem'

class ShoppingList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [

      ]
    }
  }

  render () {
    return (
      <Container>
        <Header as='h1'>Shopping List</Header>
        <ListItem />
      </Container>

    )
  }
}

export default ShoppingList
