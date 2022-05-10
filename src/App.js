import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import './scss/AppStyles.scss'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  return (
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
  )
}
