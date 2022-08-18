import React,{useState} from 'react';
import '../styles/ContactFormik.css'
import { Formik } from 'formik';
const Formulario = () => {
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    return (  
        <>
        <Formik 
        initialValues={{
            nombre: '',
            correo: '',
            contraseña: ''
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
            return errores;
        }}
           onSubmit={(valores, {resetForm})=> {
            resetForm();
            setFormularioEnviado(true)
            setTimeout(() => {
                setFormularioEnviado(false)
                
            }, 3000);
            console.log('Formulario enviado')

           }}
           >
            {( { handleSubmit, errors, touched, values, handleChange, handleBlur } )=>(
                <form className='contactForm' onSubmit={handleSubmit}>
                    <h2 className='contactLogin'>Introduce tu dirección de correo electrónico</h2>
                    <h2 className='contactLogin'>para unirte o iniciar sesión</h2>
                   
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
                <input type='submit' value='Enviar'/>
                {formularioEnviado && <p className='exito'>El formulario ha sido enviado con exito!</p>}
                

            </form>

            )
                
            }
            
        </Formik>
        
        
        
        </>
    );
}

 
export default Formulario;