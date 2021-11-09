import React from 'react';
import Card from './Card';
import ima1 from '../images/parkin2.png';


const cards = [
    {
        id: 1,
        title: 'Factibilidad Técnico',
        image:ima1,
        text:'Es necesario un lenguaje que cumpla con los siguientes requisitos: ',
        item1:'Comunidad de desarrolladores para solución de problemas y aprendizaje.',
        item2:'Soporte e integración con distintas soluciones tecnológicas.',
        item3:'Estable, escalable desde aplicaciones para dispositivos móviles a páginas web.',
        alt: 'ImagenTarjeta'
    },
    {
        id: 2,
        title: 'Factibilidad Económica',
        image:ima1,
        text:'Tomando en cuenta la información recopilada anteriormente, y las necesidades de software, hardware, conocimiento y equipo requeridos para el desarrollo de este proyecto, se puede concluir que a nivel técnico, si es factibilidad económica.',
        item1:'Desarrollador Web',
        item2:'Marketing Digital',
        item3:'Desarrollador Backend',
        alt: 'ImagenTarjeta'
    },
    {
        id: 3,
        title: 'Estudio de Mercado',
        image:ima1,
        text:'A través del siguiente proyecto se busca evaluar el desarrollo de la aplicación “Parking +” para tratar de ayudar tanto como arrendador como arrendatario, en publicar los sitios de estacionamiento disponibles, la cual presenta una nueva alternativa para los usuarios.',
        item1:'Uno de los principales inconvenientes en la ciudad de Bogotá, es la invasión de las vías públicas por no encontrar un sitio correcto donde estacionarse.',
        item2:'La tecnología permite que los dispositivos móviles, tengan distintas herramientas que ayuden a desarrollar actividades diarias en cualquier momento y espacio.',
        item3:'La tecnología permite que los dispositivos móviles, tengan distintas herramientas que ayuden a desarrollar cualquier actividad.',
        alt: 'ImagenTarjeta'
    }


]

const Estudios = () => {
    return (  
        <div className="MyRow">
                     {cards.map(card => (
                            <div className="col s12 m4 l4 " key={card.id} >
                                <Card 
                                    title={card.title}  
                                    imageSource={card.image} 
                                    text={card.text} 
                                    item1={card.item1} 
                                    item2={card.item2} 
                                    item3={card.item3}
                                    alt={card.alt} 
                                />
                            </div>
                    ))
                    }     
                    
        </div>
    );
}
 
export default Estudios;