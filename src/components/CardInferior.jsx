import React from 'react';
import img1 from './../images/Hacha2.jpg'
import { informacion } from './TextoEstudios';

const CardInferior = ({ titulo,img ,descripcion,content, alt,modal,setModal,infoModal,setInfoModal}) => {

    const openModal=()=>{
        let info={
            title: titulo,
            content: informacion(content)
        }
        setModal(!modal);
        setInfoModal(info);
        
    }
    return ( 
        
            <div className="cardInferior">
                <div className="card-imageInferior">
                    <img alt={alt} className="CardImageInferior" src={img?img:img1}/>
                    <div className="card-titleInferior">
                        <span >{titulo}</span>
                    </div>
                    
                </div>
                <div className="cardInferiorInfo">
                    <div className="card-content">
                        <p>{descripcion}</p>
                    </div>
                    <div className="card-action">
                        <button className="cta" onClick={openModal}>
                            <span>Mas Info</span>
                            <svg width="15px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
     );
}
 
export default CardInferior;