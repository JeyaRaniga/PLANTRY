import React from 'react'
import { Input, Label, Icon, Button, Table } from 'semantic-ui-react'

class ListItem extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Table.Cell>
          <Input value={this.props.name} />
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Label>
              <Icon name='cart arrow down' /> {this.props.quantity}
            </Label>
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Label color='teal' horizontal>{this.props.category}</Label>
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }}>
          <span>
            <Button primary>+</Button>
          </span>
        </Table.Cell>
        <Table.Cell style={{ textAlign: 'center' }} >
          <span>
            <Button secondary>-</Button>
          </span>
        </Table.Cell>
      </React.Fragment>
    )
  }
}

export default ListItem
