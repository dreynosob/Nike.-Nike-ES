//imagenes
import logo from './logo.svg';
// CSS
import './App.css';
//Componentes
import ShoeList from './components/ShoeList';
import Menu from './components/Nav';
import Footer from './components/Footer';
import BeforeNav from './components/BeforeNav';



function App() {
  return (
    <div className="App">
      <BeforeNav/>

      <Menu/>
      <ShoeList></ShoeList>
      <Footer/>
 

     
      
    </div>
  );
}


export default App;
