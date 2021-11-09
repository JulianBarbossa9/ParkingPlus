import React,{Fragment, useState} from 'react';
import {informacion} from './TextoEstudios';
import './Card.css';




const Card = ({title, imageSource, text, item1, item2, item3, alt,content,setModal,modal,infoModal,setInfoModal}) => {



    const openModal=()=>{
        let info={
            title: title,
            content: informacion(content)
        }
        setModal(!modal);
        setInfoModal(info);
        
    }

    return (  
        <Fragment>
            <div className="">
                <div className="card ">
                    <div className="card-image">
                        <img src={imageSource} alt={alt}/>
                        <h5 className="card-title" className="center-align">{title}</h5>
                    </div>

                    <div className="card-content">
                        <p>{text}</p>
                    </div>

                    <div className="lista">
                        <ul>
                            <li className="lista1">{item1}</li>
                            <li className="lista1">{item2}</li>
                            <li className="lista1">{item3}</li>
                        </ul>
                    </div>
                    <buton class="cta" onClick={openModal}>
                        <span>Mas Info</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </buton>
                </div>
            </div>


        </Fragment>
    );
}
 
export default Card;