import React from 'react';
import CardInferior from './CardInferior';
import './Card.css';
import img1 from './../images/Costos.jpg'

const Desarrollo = ({modal,setModal,infoModal,setInfoModal}) => {

    const tarjetas=[
        {
            titulo: 'Tipo de empresa',
            descripcion: '',
            descripciones:3,
            alt: '',
            img: ''
        },
        {
            titulo: 'Talento Humano',
            descripcion: '',
            descripciones:4,
            alt: '',
            img:''
        },
        {
            titulo: 'Costos de Desarrollo',
            descripcion: '',
            descripciones:5,
            alt: '',
            img: img1
        },
        {
            titulo: 'Estados Financieros',
            descripcion: '',
            descripciones:6,
            alt: '',
            img:''
        },
    ];
    const renderCards=(objetos)=>{
        return(
            objetos.map((objeto,index)=>(
                <CardInferior
                    img={objeto.img}
                    key={index}
                    titulo={objeto.titulo}
                    descripcion={objeto.descripcion}
                    content={objeto.descripciones}
                    alt={objeto.alt}
                    modal={modal}
                    setModal={setModal}
                    infoModal={infoModal}
                    setInfoModal={setInfoModal}
                />
        ))
        )
    };

    return (  
        <div className="MyRow">
            {renderCards(tarjetas)}
        </div>
    );
}
 
export default Desarrollo;