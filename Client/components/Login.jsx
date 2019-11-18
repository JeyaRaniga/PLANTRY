import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

const Login = () => {
  return (
    <Container>
      <Header as='h1'>Welcome to <span>PLANTRY</span></Header>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Button primary type='submit'>Log In</Button>
        <Button secondary>Not registered yet. Sign Up</Button>
      </Form>
    </Container>
  )
}

export default Login
