//Components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/menu.css'
import '../styles/BeforeNav.css'
//Imgs
import logoJordan from '../imagenes/jordanLogo.png';
import logoConverse from '../imagenes/logoConverse.png'

//Routing
import { Link, NavLink } from 'react-router-dom';
const BeforeNav = () => {
    return (  
        <>  
         <Navbar bg="light" expand="lg" className='beforeNav'>
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={logoJordan} alt='Logo Jordan' className='logoJordan'/>
        <img src={logoConverse} alt='Logo Converse' className='logoConverse'/>
        </Navbar.Brand>

        <Navbar.Brand href="#">
        <a href='' className='navBarLinksRightTop'>Ayuda |</a>
        <a href=""  className='navBarLinksRightTop'> Únete a nosotros |</a>
        <a href='' className='navBarLinksRightTop'><NavLink to='/FormikContact' activeClassName='active'> Iniciar sesión</NavLink></a>
        </Navbar.Brand>

       
        
       
      </Container>
    </Navbar>
        
        </>
    );
}
 
export default BeforeNav;