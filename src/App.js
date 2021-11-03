import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import BackgroundShapes from './components/BackgroundShapes';
import styled from '@emotion/styled';
import Carrusel from './components/Carrusel';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Objetivos from './components/Objetivos';
import Eslogan from './components/Eslogan';
import Empresarial from './components/Empresarial';
import Estudios from './components/Estudios';
import Organigrama from './components/Organigrama';
import Desarrollo from './components/Desarrollo';


//Declarar style component background
const Bg = styled.div`
  height:100vh;
  position:absolute;
  z-index: -2;
  background-attachment:fixed ;
  background-repeat: no-repeat;
  background: rgb(21,246,255);
  background: -moz-linear-gradient(90deg, rgba(21,246,255,1) 0%, rgba(0,93,98,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(21,246,255,1) 0%, rgba(0,93,98,1) 100%);
  background: linear-gradient(90deg, rgba(21,246,255,1) 0%, rgba(0,93,98,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#15f6ff",endColorstr="#005d62",GradientType=1);
`;


function App() {

        const mine=[1,2,3,4,5,0,0,0,0];
        const pages=[1,2,3,4,5,6];
        console.log(mine);
  
  return (
    <Fragment>
      <BackgroundShapes
        number={mine}
        pages={pages}
      />
      <div className = "">

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
