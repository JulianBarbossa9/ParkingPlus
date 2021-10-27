// import logo from './logo.svg';
import React, {Fragment} from 'react';
import Header from './components/Header';
import logo from './images/parkin1.png';
import Carrusel from './components/Carrusel';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Objetivos from './components/Objetivos';


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

      </div>
    </Fragment>
  );
}

export default App;
