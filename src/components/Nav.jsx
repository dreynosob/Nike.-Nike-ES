import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/menu.css'
import logo from '../imagenes/logo.png';
const Menu = () => {
    return ( 
      
      <Navbar bg="muted" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt='Logo Nike' className='logoNike'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Hombre</Nav.Link>
            <Nav.Link href="#action2">Mujer</Nav.Link>
            <NavDropdown title="Ofertas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Descuentos para hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Descuentos para mujer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Descuentos para niño/a
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Colecciones
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
          
     );
}
 
export default Menu;