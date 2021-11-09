import React, {Fragment, useState, useEffect} from 'react';
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

  /**
   * Paralax 
   */
  // const [offsetY , setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // },[]);


  return (
    <Fragment>
      <div>
        <BackgroundShapes
          number={mine}
          pages={pages}
          // style={{transform:`translateY(${offsetY * 0.00005}px)`}}
        />
      </div>  
    
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
