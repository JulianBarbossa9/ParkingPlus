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
import instagram from './images/instagram.svg';
import whatsapp from './images/wpp.svg';
import linkedin from './images/linkedin.svg';

function App() {

  const mine=[1,2,3,4,5,0,0,0,0];
  const pages=[1,2,3,4,5,6];

  
  return (
    <Fragment>
       <BackgroundShapes
        number={mine}
        pages={pages}
      /> 
      <div className="row1">
          <Header
          />

          <Carrusel
          />
          </div>
          <div className="row2">
            <Mision
            />
            <Vision
            />
            </div>
          
          <div className="row">
          <Objetivos
          />
          </div>
          <div className="MyRow empr">
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
            <div >
              <ul className="footer">
                <li><a ><img className="icon-footer" src={instagram}></img></a></li>
                <li><a ><img className="icon-footer" src={whatsapp}></img></a></li>
                <li><a ><img className="icon-footer" src={linkedin}></img></a></li>
              </ul>
            </div>
            <p>Todos los derechos reservador &copy;</p>  
          </footer>
          

     
    </Fragment>
  );
}

export default App;
