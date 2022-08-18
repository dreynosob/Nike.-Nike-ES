import React from 'react';
import Loader from './Loader';
import Message from './Message';
import UseForm from './UseForm';
import { Formik } from 'formik';

//css
import '../styles/ContactForm.css'


const initialForm = {
    name: "",
    email: "",
    password: "",
};

const validationsForm = (form)=>{
    let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  }

 

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};


const ContactForm = () => {

    const {
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    } = UseForm(initialForm, validationsForm)
    return ( 
        <>
        <h2 className='contactForm'>Login</h2>
        {loading && <Loader />}

        <form onSubmit={handleSubmit} className='contactForm'>

            <input
              type='text'
              name='name'
              placeholder='Escribe tu nombre'
              onChange={handleChange}
              onBlur={handleBlur} 
              value={form.name}
              required
              />
              {errors.name && <p style={styles}>{errors.name}</p>}


            <input
              type='email'
              name='email'
              placeholder='Escribe tu email'
              onChange={handleChange}
              onBlur={handleBlur} 
              value={form.email}
              required
              />
              {errors.email && <p style={styles}>{errors.email}</p>}

            <input
              type='text'
              name='password'
              placeholder='Contraseña'
              onChange={handleChange}
              onBlur={handleBlur} 
              value={form.password}
              required
              />
               {errors.password && <p style={styles}>{errors.password}</p>}

            


              <input type='submit' value='Enviar'/>

        </form>
      
      {response && (
       <Message msg="Ha iniciado sesión" bgColor="#198754" />
      )}
      
        </>
     );
}
 
export default ContactForm;