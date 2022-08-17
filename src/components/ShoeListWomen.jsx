import Shoe from './Shoe';
import { v4 as uuidv4 } from 'uuid';
//CSS
import '../styles/ShoeList.css'
const ShoeListWomen = () => {
    

    const shoes = [
        {
          oferta:'Rebajas Verano 2022',
          nombre:"Jordan IV 1' 07",
          category:'Zapatillas- Mujer',
          color:'1 color',
          price:'200€',
          onSale:'Disponible',
          url:'https://img.joomcdn.net/9d0503918a26358ac72985ecd62a4c336878369b_1024_1024.jpeg',
          alt:'Imagen de las Jordan IV White',
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
            url:'https://img.joomcdn.net/f3eae2f8dbbf850de5b6ccdbf58d8c0a8d0779cf_1024_1024.jpeg',
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
            url:'https://img.joomcdn.net/cdf95f2761b6957188898b3b3c15d066da83ee72_1024_1024.jpeg',
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
            url:'https://http2.mlstatic.com/D_NQ_NP_718202-MPE31061619228_062019-O.jpg',
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
            url:'https://i0.wp.com/tecalzoshoes.com/wp-content/uploads/2021/06/air-jordan-3-retro-fragment-2-1000.png?fit:1000%2C600&ssl:1',
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
              url:'https://i0.wp.com/tecalzoshoes.com/wp-content/uploads/2021/05/air-jordan-4-white-oreo-2.jpeg?fit=750%2C500&ssl=1',
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
 
export default ShoeListWomen;
