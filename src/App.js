//imagenes
import logo from './logo.svg';
// CSS
import './App.css';
//Componentes
import ShoeList from './components/ShoeList';
import Menu from './components/Nav';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

      <Menu/>
      <ShoeList></ShoeList>
      <Footer/>
 

     
      
    </div>
  );
}


export default App;
