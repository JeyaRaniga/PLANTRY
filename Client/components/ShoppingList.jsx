import React from 'react'
import { Header, Container } from 'semantic-ui-react'

import { getShoppingList } from '../api'
import ListItem from './ListItem'

class ShoppingList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    getShoppingList()
      .then(response => {   
        this.setState({
          items: response.body
        })
      })
  }

  render () {
    return (
      <Container>
        <Header as='h1'>Shopping List</Header>
        {this.state.items.map(item => <ListItem key={item.id} name={item.itemName} quantity={item.numberOfItems} />)}
      </Container>
    )
  }
}

export default ShoppingList
