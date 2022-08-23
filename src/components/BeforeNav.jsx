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
import {  NavLink } from 'react-router-dom';
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
          
       <NavLink to='/FormikContact' className='navBarLinksRightTop' activeClassName='active'> Ayuda | </NavLink> 
       <NavLink to='/RegisterForm' className='navBarLinksRightTop' activeClassName='active'>  Únete a nosotros |</NavLink>
       <NavLink to='/FormikContact' className='navBarLinksRightTop' activeClassName='active'> Iniciar sesión</NavLink>
        </Navbar.Brand>

       
        
       
      </Container>
    </Navbar>
        
        </>
    );
}
 
export default BeforeNav;
//Memo nos evita que nuestro componente se renderice una y otra vez, 
//Esto mejorará el rendimiento de nuestra app