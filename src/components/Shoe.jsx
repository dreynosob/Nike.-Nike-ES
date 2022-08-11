import React,{useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import '../styles/Shoe.css'
const Shoe = (props) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
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
            <Button variant={onSale === 'Disponible' ? 'dark' : 'danger'} ref={target} onClick={() => setShow(!show)}>{buy}</Button> <Button variant="link"></Button>
            <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Añadido al carrito
          </Tooltip>
        )}
      </Overlay>
            
            

        </article>
             
    </>

      
        
       
     );
}
 
export default Shoe;