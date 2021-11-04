import React from 'react';

    const ImageCarusel = ({src,alt,description}) => {

            /*<div className="overlapGlass">
                    <a href="https://coldomotica.com">
                        
                    </a>
                    <p className="glassP">{description}</p>
                </div>    */
        return ( 
            <div className="infoCarrusel">
                <dic className="glassImageCont">
                    <div className="overLapGlass">
                        <img src={src} alt={alt} className="img-carrusel"/>
                        <p className="glassP">{description}</p>
                    </div>
                </dic>
                
            </div>
         );
    }
     
    export default ImageCarusel;