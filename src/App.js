import 'regenerator-runtime/runtime'
import React, { Fragment } from 'react'
import { login, logout } from './utils'
import './global.css'
import './scss/AppStyles.scss'
import { Navbar, Nav, Container, Row, Card, Button } from 'react-bootstrap'

import getConfig from './config'
import MetaData from './components/MetaData'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
    <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>BlockView</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
      
          </Nav>
          <Nav>
            <Nav.Link onClick={(window.accountId === '') ? login : logout}>
              {(window.accountId === '') ? 'Login' : window.accountId}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {(window.accountId !== '') ?
          <Container>
            <Row className='d-flex justify-content-center'> <MetaData/> </Row>
            <Row className='d-flex justify-content-center'>Send Tokens</Row>
            <Row className='d-flex justify-content-center'>Active Keys</Row>
          </Container>
        :

        <Card>
          <Card.Header as="h5">
            Hello User!
          </Card.Header>
          <Card.Body>
            <Card.Title>Please Login</Card.Title>
            <Card.Text>
              This Application will not work unless you're logged in.
            </Card.Text>
            <Button onClick={login}>Login</Button>
          </Card.Body>
        </Card>
        }
    </Fragment>
    )
}
      
