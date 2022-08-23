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
import BagDash from './BagDash';
//Router
import { Link, NavLink } from 'react-router-dom';
const Menu = () => {
    return ( 
      <>

<Navbar bg="muted" expand="lg" className='navBar'>
      <Container fluid>
        <Navbar.Brand>
        <NavLink to='/Nike.-Nike-ES' activeClassName='active'>
        <img src={logo} alt='Logo Nike' className='logoNike'/>
        </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink to='/shoeList' activeClassName='active'>Hombre</NavLink></Nav.Link>
            <Nav.Link ><NavLink to='/shoeListWomen' activeClassName='active'>Mujer</NavLink></Nav.Link>
            <NavDropdown title="Ofertas" id="navbarScrollingDropdown">
              <NavDropdown.Item>Descuentos para hombre</NavDropdown.Item>
              <NavDropdown.Item>
              Descuentos para mujer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              Descuentos para niño/a
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>
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
            <BagDash/>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      </>
      
    
          
          
     );
}
 
export default Menu;