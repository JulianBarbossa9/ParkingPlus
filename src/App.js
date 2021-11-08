import React, {Fragment} from 'react';
import Header from './components/Header';
import BackgroundShapes from './components/BackgroundShapes';
import Carrusel from './components/Carrusel';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Objetivos from './components/Objetivos';
import Eslogan from './components/Eslogan';
import Empresarial from './components/Empresarial';
import Estudios from './components/Estudios';
import Organigrama from './components/Organigrama';
import Desarrollo from './components/Desarrollo';
import styled from '@emotion/styled';

function App() {

  const mine=[1,2,3,4,5,0,0,0,0];
  const pages=[1,2,3,4,5,6];

  
  return (
    <Fragment>
      <BackgroundShapes
        number={mine}
        pages={pages}
      />
    
          <Header
          />

          <Carrusel
          />

            <Mision
            />
            <Vision
            />

          
          <div className="row">
          <Objetivos
          />
          </div>
          <div className="row empr">
            <Eslogan
            />
            <Empresarial
            />
          </div>

            <Estudios
            />

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
          

     
    </Fragment>
  );
}

export default App;
