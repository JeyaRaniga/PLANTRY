import React from 'react'
import { Container, Input, Label, Icon, Button } from 'semantic-ui-react'

class ListItem extends React.Component {
  render () {
    return (
      <Container>
        <Input value={this.props.name} /><span><Label>
          <Icon name='cart arrow down' /> {this.props.quantity}
        </Label></span>
        <span><Button primary>+</Button></span>
        <span><Button secondary>-</Button></span>
      </Container>

    )
  }
}

export default ListItem
