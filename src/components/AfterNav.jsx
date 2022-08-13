//Components
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
//Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/menu.css'
import '../styles/BeforeNav.css'
//CSS
import '../styles/AfterNav.css'
const AfterNavBar = () => {
    return (  
        <>  
         <Navbar bg="light" expand="lg" className='AfterNavBar'>
      <Container fluid>
        <Navbar.Brand href="#">
        
     
        </Navbar.Brand>

        

       
        
       
      </Container>
    </Navbar>
        
        </>
    );
}
 
export default AfterNavBar;