//imagenes
import logo from './logo.svg';
// CSS
import './App.css';
//Componentes
import ShoeList from './components/ShoeList';
import Menu from './components/Nav';
import Footer from './components/Footer';
import BeforeNav from './components/BeforeNav';
import AfterNav from './components/AfterNav'



function App() {
  return (
    <div className="App">
      <BeforeNav/>
      <Menu/>
      <AfterNav/>
      <ShoeList></ShoeList>
      <Footer/>
 

     
      
    </div>
  );
}


export default App;
