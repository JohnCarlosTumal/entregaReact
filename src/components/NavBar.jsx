import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarlWidget from './CarlWidget';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='contenedor'>Cabañas Rio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hospedaje</Nav.Link>
            <Nav.Link href="#link">Actividades</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Comidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bebidas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cocteles</NavDropdown.Item>
              <NavDropdown.Divider />              
            </NavDropdown>
          </Nav>
          <CarlWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar