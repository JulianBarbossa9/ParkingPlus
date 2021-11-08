import React, {Fragment} from 'react';
import video from '../images/retoV3FE.jpg';
// import ima1 from '../images/parkin2.png';

const Objetivos = () => {
    return (  
        <Fragment>
            <div className="objetivos col l6 m5 s12">
                <div className="container-objetos">
                    <h2>Objetivos</h2>
                        <ul>
                            <li className="lista2">Facilitar el contacto entre personas que necesiten parqueaderos, con propietarios de parqueaderos.</li>
                            <li className="lista2">Mejorar el acceso a parqueaderos en la ciudad, buscando reducir la necesidad de parquear en vías principales</li>
                        </ul>
                </div>
            </div>

            <div className="videochevere col l6 m5 s12">
                <div className="container-imgChevere">
                    <img src={video} alt="imgChevere" className="container-img"/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Objetivos;