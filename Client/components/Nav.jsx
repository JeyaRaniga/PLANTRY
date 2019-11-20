import React from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      activeItem: 'Login'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick (e) {
    this.setState({
      activeItem: e.target.name
    })
  }

  render () {
    const { activeItem } = this.state
    return (
      <Menu>
        <Link to='/'>
          <Menu.Item
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>
        </Link>
        <Link to='/main'>
          <Menu.Item
            name='ShoppingList'
            active={activeItem === 'ShoppingList'}
            onClick={this.handleItemClick}
          >
            Shopping List
          </Menu.Item>
        </Link>
      </Menu>

    )
  }
}

export default Nav
