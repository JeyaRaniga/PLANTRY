import React from 'react'
import { Header, Container, Table, Button } from 'semantic-ui-react'

import { getShoppingList } from '../api'
import ListItem from './ListItem'

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  componentDidMount() {
    getShoppingList()
      .then(response => {
        this.setState({
          items: response.body
        })
      })
  }

  handleAddItem() {
    this.setState({
      items: [
        ...this.state.items, {
          id: this.state.items[this.state.items.length - 1],
          itemName: '',
          categoryName: '',
          numberOfItems: 0
        }
      ]
    })
  }

  render() {
    return (
      <Container style={{
        backgroundColor: 'white',
        padding: '35px',
        border: '1px'
      }}>
        <Header as='h1'>Your Shopping List</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Items to purchase</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Section</Table.HeaderCell>
              <Table.HeaderCell>Add Items</Table.HeaderCell>
              <Table.HeaderCell>Remove Items</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.items.map(item => <Table.Row key={item.id}><ListItem key={item.id} name={item.itemName} quantity={item.numberOfItems} category={item.categoryName} id={item.id} /></Table.Row>)}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                <Button onClick={this.handleAddItem}>Add Items</Button>
                <Button>Save Changes</Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>

      </Container>
    )
  }
}

export default ShoppingList
