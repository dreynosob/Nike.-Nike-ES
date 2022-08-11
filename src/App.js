//imagenes
import logo from './logo.svg';
// CSS
import './App.css';
//Componentes
import ShoeList from './components/ShoeList';
import Menu from './components/Nav';

function App() {
  return (
    <div className="App">

      <Menu/>
      <ShoeList></ShoeList>

     
      
    </div>
  );
}

export default App;
