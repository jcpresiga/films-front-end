import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Tabla from './Components/Tabla';

function App() {
  
  const titulo = "Peliculas IUDigital";

  return (
    <div className="container">
      <NavBar titulo = {titulo}/>
      <Tabla />
    </div>
  );
}

export default App;
