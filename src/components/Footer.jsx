import React from "react"
import {FaMapMarkerAlt} from 'react-icons/fa';
import '../styles/Footer.css'

const Footer = ()=> {
    return (
        <>
        
<div className="page-footer font-small indigo footer2">

 
  <div className="container text-center text-md-left">


    <div className="row">

    
      <div className="col-md-3 mx-auto">

     
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4"></h5>

        <ul className="list-unstyled listaGeneralInfo">
          <li>
            <a href="#!" className="tituloListas">TARJETAS DE REGALO</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">BUSCAR UNA TIENDA</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">NIKE JOURNAL</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">HAZTE MEMBER</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">DESCUENTO PARA ESTUDIANTES</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">COMENTARIOS</a>
          </li>
          <li>
            <a href="#!" className="tituloListas">CÓDIGOS PROMOCIONALES</a>
          </li>
        </ul>

      </div>
    

      <hr className="clearfix w-100 d-md-none"/>

     
      <div className="col-md-3 mx-auto">

     
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">AYUDA</h5>

        <ul className="list-unstyled listaAyuda">
        <li>
            <a href="#!">Estado del pedido</a>
          </li>
          <li>
            <a href="#!">Envíos y entregas</a>
          </li>
          <li>
            <a href="#!">Devoluciones</a>
          </li>
          <li>
            <a href="#!">Opciones de pago</a>
          </li>
          <li>
            <a href="#!">Contacto</a>
          </li>
          <li>
            <a href="#!">Ayuda con los códigos promocionales de Nike</a>
          </li>
          
         
        </ul>

      </div>
    

      <hr className="clearfix w-100 d-md-none"/>

   
      <div className="col-md-3 mx-auto">

     
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">ACERCA DE NIKE</h5>

        <ul className="list-unstyled listaAyuda">
          <li>
            <a href="#!">Novedades</a>
          </li>
          <li>
            <a href="#!">Trabaja con nosotros</a>
          </li>
          <li>
            <a href="#!">Inversores</a>
          </li>
          <li>
            <a href="#!">Sostenibilidad</a>
          </li>
          
        </ul>

      </div>
     

      <hr className="clearfix w-100 d-md-none"/>

     
      <div className="col-md-3 mx-auto">

    
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4 tituloListas listaAyuda">APLICACIONES DE NIKE</h5>

        <ul className="list-unstyled listaAyuda">
          <li>
            <a href="#!">Nike App</a>
          </li>
          <li>
            <a href="#!">Nike Run Club App</a>
          </li>
          <li>
            <a href="#!">Nike Training Club App</a>
          </li>
          <li>
            <a href="#!">SNKRS</a>
          </li>
        </ul>

      </div>
    

    </div>


  </div>
 

  
  <div className="footer-copyright text-left py-3"><FaMapMarkerAlt/>
    <a href="/">© 2022 Copyright Nike, Inc. Todos los derechos reservados</a>
  </div>


</div>

        </>
    )
}
export default Footer;