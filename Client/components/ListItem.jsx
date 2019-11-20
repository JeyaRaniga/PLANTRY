import React from 'react'
import { Input, Label, Icon, Button, Table } from 'semantic-ui-react'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      quantity: this.props.quantity,
      category: this.props.category,
      inputMode: false
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputMode = this.inputMode.bind(this)
  }

  handleAdd() {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  handleSubtract() {
    this.setState({
      quantity: this.state.quantity - 1
    })
  }

  inputMode() {
    this.setState({
      inputMode: true
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, quantity, category, inputMode } = this.state
    return (
      <React.Fragment>
        <Table.Cell>
          <Input name='name' value={name} onChange={this.handleChange} />
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Label>
              <Icon name='cart arrow down' />{quantity}
            </Label>
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span onClick={this.inputMode}>
            {inputMode ? <Input name='category' value={category} onChange={this.handleChange} /> : <Label color='teal' horizontal>{category}</Label>}
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Button primary onClick={this.handleAdd}>+</Button>
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Button secondary onClick={this.handleSubtract}>-</Button>
          </span>
        </Table.Cell>
      </React.Fragment>
    )
  }
}

export default ListItem
