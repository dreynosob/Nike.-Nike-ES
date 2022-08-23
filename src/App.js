//imagenes
import logo from './logo.svg';
// CSS
import './App.css';
//Componentes
import ShoeList from './components/ShoeList';
import ShoeListWomen from './components/ShoeListWomen';
import Menu from './components/Nav';
import Footer from './components/Footer';
import BeforeNav from './components/BeforeNav';
import AfterNav from './components/AfterNav'
//Router
import {BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom'
import Carousel from './components/Video';
import ContactForm from './components/ContactForm';
import FormikContact from './components/FormikContact';
import RegisterForm from './components/RegisterForm';



function App() {
  return (
    <div className="App">
     
   <Router>
   
  
    
      <Routes>
        
        
        <Route exact path='/shoeList' element={<>

          <BeforeNav/>
          <Menu/>
          <AfterNav/> 
          <ShoeList/>
          <Footer/>

        </>
      }
      />
         
        <Route exact path='/Nike.-Nike-ES' element={
        <>
        <BeforeNav/>
        <Menu/>
        <AfterNav/> 
        <Carousel/>
        <Footer/>
        </>
      }
      />


<Route exact path='/shoeListWomen' element={
        <>
        <BeforeNav/>
        <Menu/>
        <AfterNav/> 
        <ShoeListWomen/>
        <Footer/>
        </>
      }
      />

<Route exact path='/FormikContact' element={<>
 
<BeforeNav/>
<Menu/>
<AfterNav/> 
<FormikContact/>

<Footer/>

</>
}
/>


<Route exact path='/RegisterForm' element={<>
 
 
 <RegisterForm/>
 
 
 
 </>
 }
 />
   

      </Routes>

    </Router>
      
    

     
      
    </div>
  );
}


export default App;
