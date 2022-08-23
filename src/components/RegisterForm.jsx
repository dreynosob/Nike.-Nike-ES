import React,{useState} from 'react';
import '../styles/ContactFormik.css'
import { Formik } from 'formik';
import Message from './Message';
import logo from '../imagenes/logo.png';
import SelectCountry from './SelectCountry';
import LinksExample from './Alert';
import { Alert } from 'bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';





  //Formulario

const RegisterForm = () => {

    const [formularioEnviado, setFormularioEnviado] = useState(false);
    
    
    return ( 

        <>
        {formularioEnviado && (
                <Message msg={'Registro completado con éxito'} bgColor='#198754'/>  
      
      
)}
<Navbar.Brand>
        <NavLink to='/Nike.-Nike-ES' activeClassName='active'>
        <img src={logo} alt='Logo Nike' className='logoNikeForm'/>
        </NavLink>
        </Navbar.Brand>
         

<Formik 
        initialValues={{
            nombre: '',
            correo: '',
            contraseña:''
        }}
        
        validate ={(valores)=>{
            let errores = {}

            //Validacion Nombre
            if(!valores.nombre){
               errores.nombre = 'Por favor ingresa un nombre'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = 'El nombre solo puede contener letras y espacios'

            }

            //Validacion correocorreo
            if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo'
             }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                 errores.correo = 'El correo solo puede conteneder números, letras, puntos, guiones y guion bajo'
 
             }
/*
             //Validación apellido

             if(!valores.apellidos){
                errores.apellidos = 'Por favor ingrese su apellido'
             }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)){
                errores.apellidos = 'El nombre solo puede contener letras y espacios'

            }

            //validacion fecha nacimiento

            if(!valores.fecha){
                errores.fecha = 'Por favor ingresa su fecha de nacimiento'
            }else if(!/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(valores.fecha)){
                errores.fecha = 'El formato de la fecha es inválido'
            }
*/
            //validación contraseña

            if(!valores.contraseña){
                errores.contraseña = 'Por favor ingrese una contraseña'
            }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(valores.contraseña)){
                errores.contraseña = 'La contraseña debe tener al menos 8 caracteres y un máximo de 15, letra mayúscula o minúscula y no debe tener espacios en blanco'
            }
            return errores;
        }}
           onSubmit={(valores, {resetForm})=> {
            if(valores.nombre && valores.correo && valores.contraseña !== null){
                setTimeout(() => {
                   alert(`${valores.nombre} se ha registrado con éxito`)
                    
                }, 4000);
               
               
                
            }
           
            resetForm();
            setFormularioEnviado(true)
            setTimeout(() => {
                setFormularioEnviado(false)
                
            }, 3000);
            

           }}
           >
           
            {( { handleSubmit, errors, touched, values, handleChange, handleBlur } )=>(
                
                <form className='contactForm' onSubmit={handleSubmit}>
                    <h2 className='contactLogin'>Introduce tu dirección de correo eletrónico para unirte o iniciar sesión.</h2>
                  <SelectCountry/>

                   
                <div>
                    <input 
                    type='text' 
                    name='nombre'  
                    placeholder='Usuario' 
                    value={values.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    />
                  

                    {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
                    
                </div>
           
                    
              {/*
               <div>
                    
                    <input 
                    type='text' 
                    name='apellidos'  
                    placeholder='Apellidos' 
                    value={values.apellidos}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    />
                  

                    {touched.apellidos && errors.apellidos && <div className='error'>{errors.apellidos}</div>}
                </div>
                

<div>
                    
                    <input 
                    type='text' 
                    name='fecha'  
                    placeholder='Fecha de nacimiento' 
                    value={values.fecha}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    />
                  

                    {touched.fecha && errors.fecha && <div className='error'>{errors.fecha}</div>}
                </div>
*/}
               
                 <div>
                    
                    <input 
                    type='password' 
                    name='contraseña'  
                    placeholder='*****' 
                    value={values.contraseña}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />

                    {touched.contraseña && errors.contraseña && <div className='error'>{errors.contraseña}</div>}
                </div> 

                
                <div>
                   
                    <input 
                    type='email' 
                    name='correo'  
                    placeholder='Correo@correo.com' 
                    value={values.correo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                    />
                    

                    {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}
                </div>
       
               
                <p className='terminosForm'>Al continuar, aceptas los <span>Términos de uso de Nike</span> y confirmas que has leído la <span>Política de privacidad</span> de Nike.</p>

                
                
                <input type='submit' value='Siguiente' className='enviar'/>
                




            </form>
            )
                
            }
            
        </Formik>
       
        
        
        </>
     );
}
 
export default RegisterForm;

