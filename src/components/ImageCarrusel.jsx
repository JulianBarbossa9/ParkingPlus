import React from 'react';

    const ImageCarusel = ({src,alt,description,href}) => {

        return ( 
            <div className="infoCarrusel">
                <div className="glassImageCont">
                    <div className="overLapGlass">
                        <a href={href}>
                            <img src={src} alt={alt} className="img-carrusel  hoverable"/>
                        </a>
                        <p className="glassP">{description}</p>
                    </div>
                </div>
                
            </div>
         );
    }
     
    export default ImageCarusel;