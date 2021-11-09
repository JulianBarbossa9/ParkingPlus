import React from 'react';
import CardInferior from './CardInferior';

const Desarrollo = () => {

    const tarjetas=[
        {
            titulo: 'Tipo de empresa',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: 'Talento Humano',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: 'Costos de Desarrollo',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: 'Estados Financieros',
            descripcion: '',
            descripciones:['','']
        },
    ];
    const renderCards=(objetos)=>{
        return(
            objetos.map((objeto)=>(
                <CardInferior
                    titulo={objeto.titulo}
                    descripcion={objeto.descripcion}
                    descripciones={objeto.descripciones}
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