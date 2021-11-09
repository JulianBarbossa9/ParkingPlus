import React, {Fragment, useState} from 'react';
import ReactPlayer from 'react-player';
import video from '../images/VideoRiver.mp4';
// import ima1 from '../images/parkin2.png';

const Objetivos = () => {


    return (  
        <Fragment>
            <div className="objetivos col l6 m5 s12">
                <div className="container-objetos">
                    <h2>Objetivos</h2>
                        <ul>
                            <li className="lista2 flow-text">Facilitar el contacto entre personas que necesiten parqueaderos, con propietarios de parqueaderos.</li>
                            <li className="lista2 lista2 flow-text">Mejorar el acceso a parqueaderos en la ciudad, buscando reducir la necesidad de parquear en vías principales</li>
                        </ul>
                </div>
            </div>

            <div className="videochevere col l6 m5 s12">
                <div className="container-imgChevere">
                    {/* <img src={video} alt="imgChevere" className="container-img"/> */}
                    <ReactPlayer
                        url={video} 
                        width="100%" 
                        height="100%" 
                        controls={true}
                        playing={true}
                        loop={true}
                        volume={0}
                        controls={false}
                    />
                </div>
            </div>
        </Fragment>
    );
}
 
export default Objetivos;