import Shoe from './Shoe';
import { v4 as uuidv4 } from 'uuid';
//CSS
import '../styles/ShoeList.css'
const ShoeList = () => {
    

    const shoes = [
        {
          oferta:'Rebajas Verano 2022',
          nombre:"Jordan III 1' 07",
          category:'Zapatillas- Hombre',
          color:'1 color',
          price:'200€',
          onSale:'Disponible',
          url:'https://hypescrape.com/wp-content/uploads/2022/07/Wethenew-Sneakers-France-Air-Jordan-3-Retro-Fragment-White-Black-DA3595-100-1_800x_6d84a139-1b56-4a38-a724-b4ec582f7038.png',
          alt:'Imagen de las Jordan III White',
          buy:'Comprar',
          id:uuidv4()
        },
        {
            oferta:'Rebajas Verano 2022',
            nombre:"Jordan III 1' 08",
            category:'Zapatillas- Hombre',
            color:'2 colores',
            price:'200€',
            onSale:'Disponible',
            url:'https://cdn.shopify.com/s/files/1/0321/6359/4376/products/Heritage-Paris-Air-Jordan-3-Retro-Cardinal-Red-Sneakers-2_500x@2x.png?v:1645715049',
            alt:'Imagen de las Jordan III White',
            buy:'Comprar',
            id:uuidv4()
        },
        {
            oferta:'Rebajas Verano 2022',
            nombre:"Jordan IV 1' 09",
            category:'Zapatillas- Hombre',
            color:'2 colores',
            price:'200€',
            onSale:'Disponible',
            url:'https://i0.wp.com/tecalzoshoes.com/wp-content/uploads/2021/06/air-jordan-3-retro-fragment-2-1000.png?fit:1000%2C600&ssl:1',
            alt:'Imagen de las Jordan III White',
            buy:'Comprar',
            id:uuidv4()
        },

        {
            oferta:'Rebajas Verano 2022',
            nombre:"Jordan IV 1' 10",
            category:'Zapatillas- Hombre',
            color:'2 colores',
            price:'200€',
            onSale:'No disponible',
            url:'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-4-retro-metallic-orange-487165_540x.png?v:1639397542',
            alt:'Imagen de las Jordan III White',
            buy:'Sin Stock',
            id:uuidv4()
        },
        {
            oferta:'Rebajas Verano 2022',
            nombre:"Jordan III 1' 07",
            category:'Zapatillas- Hombre',
            color:'1 color',
            price:'200€',
            onSale:'Disponible',
            url:'https://hypescrape.com/wp-content/uploads/2022/07/Wethenew-Sneakers-France-Air-Jordan-3-Retro-Fragment-White-Black-DA3595-100-1_800x_6d84a139-1b56-4a38-a724-b4ec582f7038.png',
            alt:'Imagen de las Jordan III White',
            buy:'Comprar',
            id:uuidv4()
          },
          {
              oferta:'Rebajas Verano 2022',
              nombre:"Jordan III 1' 08",
              category:'Zapatillas- Hombre',
              color:'2 colores',
              price:'200€',
              onSale:'Disponible',
              url:'https://cdn.shopify.com/s/files/1/0321/6359/4376/products/Heritage-Paris-Air-Jordan-3-Retro-Cardinal-Red-Sneakers-2_500x@2x.png?v:1645715049',
              alt:'Imagen de las Jordan III White',
              buy:'Comprar',
              id:uuidv4()
          },
          {
              oferta:'Rebajas Verano 2022',
              nombre:"Jordan IV 1' 09",
              category:'Zapatillas- Hombre',
              color:'2 colores',
              price:'200€',
              onSale:'Disponible',
              url:'https://i0.wp.com/tecalzoshoes.com/wp-content/uploads/2021/06/air-jordan-3-retro-fragment-2-1000.png?fit:1000%2C600&ssl:1',
              alt:'Imagen de las Jordan III White',
              buy:'Comprar',
              id:uuidv4()
          },
  
          {
              oferta:'Rebajas Verano 2022',
              nombre:"Jordan IV 1' 10",
              category:'Zapatillas- Hombre',
              color:'2 colores',
              price:'200€',
              onSale:'No disponible',
              url:'https://cdn.shopify.com/s/files/1/2358/2817/products/air-jordan-4-retro-metallic-orange-487165_540x.png?v:1639397542',
              alt:'Imagen de las Jordan III White',
              buy:'Sin Stock',
              id:uuidv4()
          }

        

    ]
    return ( 
        <>
        <section className='shoelist'>
            {shoes.map((shoe)=> {
                const {oferta, nombre, category, color, price, onSale, url, alt, buy} = shoe;
                return <Shoe shoe={shoe} key={shoe.id}></Shoe>
            })}
        </section>


        </>
     );
}
 
export default ShoeList;
