import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Shoe.css'
const Shoe = (props) => {
    const { oferta, nombre, category, color,price, buy, url, onSale, alt} = props.shoe
    
    return ( 
    <>


      <article className='shoe'>
            <img src={url} alt={alt}/>
            <h1>{oferta}</h1>
            <h5>{nombre}</h5>
            <h4>{category}</h4>
            <h4>{color}</h4>
            <h4 className={onSale === 'Disponible' ? 'onSale' : 'noSale'}>{onSale}</h4>
            <h4 className='price'>{price}</h4>
            <Button variant={onSale === 'Disponible' ? 'dark' : 'danger'}>{buy}</Button> <Button variant="link"></Button>
            
            

        </article>
             
    </>

      
        
       
     );
}
 
export default Shoe;