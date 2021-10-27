// import logo from './logo.svg';
import React, {Fragment} from 'react';
import Header from './components/Header';
import logo from './images/parkin1.png';
import Carrusel from './components/Carrusel';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Objetivos from './components/Objetivos';
import Eslogan from './components/Eslogan';
import Empresarial from './components/Empresarial';
import Estudios from './components/Estudios';
import Organigrama from './components/Organigrama';
import Desarrollo from './components/Desarrollo';

function App() {
  
  
  
  
  return (
    <Fragment>
      <div className = "container">
        <div className = "mainLogo">
          <img src = {logo} alt="logoParking +"/>
        </div>  
          <Header
          />
          <Carrusel
          />
          <Mision
          />
          <Vision
          />
          <Objetivos
          />
          <Eslogan
          />
          <Empresarial
          />
          <Estudios
          />
          <Organigrama
          />
          <Desarrollo
          />
          <footer>
            <p>Todos los derechos reservador &copy;</p> 
          </footer>
          

      </div>
    </Fragment>
  );
}

export default App;
