import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

const Login = () => {
  return (
    <div>
      <Container style={{
        backgroundColor: 'white',
        margin: 'auto',
        padding: '35px',
        border: '1px'
      }}>
        <Header as='h1'>Login to your account</Header>
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
    </div>
  )
}

export default Login
