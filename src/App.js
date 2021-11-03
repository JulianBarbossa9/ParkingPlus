// import logo from './logo.svg';
import React, {Fragment, useState,useEffect} from 'react';
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
      <div className = "">
        <div className = "mainLogo brand-logo">
          <img src = {logo} alt="logoParking +" />
        </div>  
          <Header
          />

          <Carrusel
          />
          <div className="row">
            <Mision
            />
            <Vision
            />
          </div>
          <div className="row">
          <Objetivos
          />
          </div>
          <div className="row">
            <Eslogan
            />
            <Empresarial
            />
          </div>
          <div className="row">
            <Estudios
            />
            </div>
            <div className="row">
            <Organigrama
            />
            </div>
            <div className="row">
            <Desarrollo
            />
          </div>
          <footer>
            <p>Todos los derechos reservador &copy;</p>  
          </footer>
          

      </div>
    </Fragment>
  );
}

export default App;
