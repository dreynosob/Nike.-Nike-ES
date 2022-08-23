import React,{useState} from 'react';
import { helpHttp } from '../helpers/Helper';


const UseForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [name, setName] = useState(initialForm.name);

    
    const handleChange = (e)=>{
        const { name, value } = e.target;

        setForm({
          ...form,
          [name]: value,
        });
        
    }

    const handleBlur = (e)=>{
        handleChange(e);
        setErrors(validateForm(form));
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/darlynreynoso74@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 4000);
        });
    } else {
      return;
    }
        
    }
    

    return {
        form,
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit
    }
}
export default UseForm;