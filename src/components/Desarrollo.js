import React from 'react';
import CardInferior from './CardInferior';

const Desarrollo = () => {

    const tarjetas=[
        {
            titulo: '',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: '',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: '',
            descripcion: '',
            descripciones:['','']
        },
        {
            titulo: '',
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