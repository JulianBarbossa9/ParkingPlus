import React from 'react';

    const ImageCarusel = ({src,alt,description}) => {
        let image;  
       /* if(img===1)
            image=img2;
        if(img===0)
            image=img1;
        if(img===2)
            image=img3;*/
            
        return ( 
            <div className="infoCarrusel">
                 <div className="glassImageCont">
                    <div className="overlapGlass">
                        <a href="https://coldomotica.com">
                            <img src={src} alt={alt} className="img-carrusel"/>
                        </a>
                    </div>
                    <div className="overlapGlass1">
                        <a href="https://coldomotica.com">
                            <img src={src} alt={alt} className="img-carrusel"/>
                        </a>
                        <p className="glassP">{description}</p>
                    </div>
                </div> 
                
            </div>
         );
    }
     
    export default ImageCarusel;