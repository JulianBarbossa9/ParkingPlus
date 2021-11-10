import React from 'react';
import CardInferior from './CardInferior';
import './Card.css';
import img1 from './../images/Costos.jpg'
import img2 from './../images/Empresa.jpg'
import img3 from './../images/Talento.jpg'
import img5 from './../images/Estados.jpg'

const Desarrollo = ({modal,setModal,infoModal,setInfoModal}) => {

    const tarjetas=[
        {
            titulo: 'Tipo de empresa',
            descripcion: 'Empresa S.A.S, Microempresa, del sector terciario, privada y regional',
            descripciones:3,
            alt: 'empresaPixabay',
            img: img2
        },
        {
            titulo: 'Talento Humano',
            descripcion: 'Los perfiles que deben cumplir las peronas que trabajaran con nosotros',
            descripciones:4,
            alt: 'Profesional Pixabay',
            img:img3
        },
        {
            titulo: 'Costos de Desarrollo',
            descripcion: 'La inversión inicial que se debe realizar para tener el mínimo producto viable para el funcionamiento de la empresa.',
            descripciones:5,
            alt: 'codePixabay',
            img: img1
        },
        {
            titulo: 'Estados Financieros',
            descripcion: 'Informción respecto al flujo de caja, activos y bienes que la empresa posee',
            descripciones:6,
            alt: 'estados financieros pixabay',
            img: img5
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