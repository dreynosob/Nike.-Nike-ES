import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/menu.css'
import logo from '../imagenes/logo.png';
import BagDash from './BagDash';
//Router
import {  NavLink } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';
const Menu = () => {

    return ( 
      <>

<Navbar bg="muted" expand="lg" className='navBar' >
      <Container fluid>
        <Navbar.Brand>
        <NavLink to='/Nike.-Nike-ES' activeClassName='active'>
        <img src={logo} alt='Logo Nike' className='logoNike'/>
        </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='borderToggle' />
        <Navbar.Collapse id="navbarScroll" className='hamburguerBackground'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link><NavLink to='/shoeList' activeClassName='active' className='colorContentHamburguer'>Hombre</NavLink></Nav.Link>
            <Nav.Link ><NavLink to='/shoeListWomen' activeClassName='active'className='colorContentHamburguer'>Mujer</NavLink></Nav.Link>
            <NavDropdown title="Ofertas" id="navbarScrollingDropdown" className='colorContentHamburguer'>
              <NavDropdown.Item className='colorContentHamburguer'>Descuentos para hombre</NavDropdown.Item>
              <NavDropdown.Item className='colorContentHamburguer'>
              Descuentos para mujer
              </NavDropdown.Item>
              <NavDropdown.Divider className='colorContentHamburguer' />
              <NavDropdown.Item className='colorContentHamburguer'>
              Descuentos para niño/a
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled className='colorContentHamburguer'>
              Colecciones
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search" 
              size="sm"
            />
             <div className="search-icon">
               <FaSearch />
              </div>
            </InputGroup>
            
            <BagDash/>
          </Form>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      </>
      
    
          
          
     );
}
 
export default Menu;