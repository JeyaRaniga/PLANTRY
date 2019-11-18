import React from 'react'
import { Container, Input } from 'semantic-ui-react'

class ListItem extends React.Component {
  render () {
    return (
      <Container>
        <Input focus placeholder='Add Item' />
      </Container>

    )
  }
}

export default ListItem
