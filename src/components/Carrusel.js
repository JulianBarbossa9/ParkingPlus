import React, {Fragment} from 'react';
import img1 from './../images/retoV1FE.jpg'
import img2 from './../images/retoV2FE.jpg'
import img3 from './../images/retoV3FE.jpg'
import flecha1 from './../images/left-arrow.png'
import flecha2 from './../images/right-arrow.png'

const Carrusel = () => {
    return (  
        <Fragment>
            <div className="carrusel">
                <div className="contendorSlide">
                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            {/* <h2 className="nosotros"> Nosotros</h2>
                            <p>Ingenieros en Multimedia</p> */}
                            <img src={img1} alt="img1" className="img-carrusel"/>
                        
                        </a>
                    </div>

                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            <img src={img2} alt="img1" className="img-carrusel"/>
                        </a>
                    </div>

                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            <img src={img3} alt="img1" className="img-carrusel"/>
                        </a>
                    </div>
                </div>
                
                <div className="controles">
                    <button className="btn-carrusel">
                        <img src={flecha1} alt="flechaIzq" className="izquierda"/>
                    </button>
                    <button className="btn-carrusel derecho">
                        <img src={flecha2} alt="flechaDer"/>
                    </button>
                </div>

            </div>
        </Fragment>
    );
}
 
export default Carrusel;