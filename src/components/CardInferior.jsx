import React from 'react';
import img1 from './../images/Hacha2.jpg'

const CardInferior = ({ titulo, descripcion,descripciones, alt}) => {
    return ( 
        
            <div className="cardInferior">
                <div className="card-imageInferior">
                    <img alt={alt} className="CardImageInferior" src={img1}/>
                    <div className="card-titleInferior">
                        <span >Card Title</span>
                    </div>
                    
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                    <a href="!#">This is a link</a>
                </div>
            </div>
     );
}
 
export default CardInferior;