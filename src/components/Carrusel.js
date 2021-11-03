import React, {Fragment, useRef, useEffect} from 'react';
import img1 from './../images/retoV1FE.jpg';
import img2 from './../images/retoV2FE.jpg';
import img3 from './../images/retoV3FE.jpg';
import arrow from './../images/arrow.svg';







const Carrusel = () => {
    
    const slideshow = useRef(null);
    const intervaloCarrusel = useRef(null);

    const siguiente = () => {
        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){
            
            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

            // Creamos la transición del slideshow
            slideshow.current.style.transition = `3000ms ease-out all`;
            
            //Calculo el tamaño de la imagen para saber cuanto la voy a desplazar
            const tamaSlide = slideshow.current.children[0].offsetWidth;

            // Mover el slideshow
            slideshow.current.style.transform = `translateX(-${tamaSlide}px)`;

            const transicion = () => {
                //Reiniciar la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // TOmar el primer elemento y mandarlo al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend',transicion);
            }

            // Para cuando terminada la animacion 
            slideshow.current.addEventListener('transitionend', transicion);

        }
    }
    
    const anterior = () => {
        console.log(slideshow.current);
        if(slideshow.current.children.length > 0){

            // Obtener ultimo elemento
            const index = slideshow.current.children.length - 1; 
            const ulitmoElmento = slideshow.current.children[index]; 

            slideshow.current.insertBefore(ulitmoElmento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';

            const tamaSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamaSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '3000ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30)
        }
    }

    useEffect(() => {
        intervaloCarrusel.current = setInterval(()=>{
            siguiente();
        },4000);

        //Eliminar los intervalos
        slideshow.current.addEventListener('mouseenter', () =>{
            clearInterval(intervaloCarrusel.current);
        });

        // Volver a poner el intervalo cuando saquen el cursor de la imagen
        slideshow.current.addEventListener('mouseleave', () =>{
            intervaloCarrusel.current = setInterval(()=>{
                siguiente();
            },4000);
        });
    },[]);



    return (  
        <Fragment>
            <div className="carrusel row">
                <div className="contendorSlide" ref={slideshow}>
                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            {/* <h2 className="nosotros"> Nosotros</h2>
                            <p>Ingenieros en Multimedia</p> */}
                            <img src={img1} alt="img1" className="img-carrusel"/>
                        
                        </a>
                        <p>Hola</p>
                    </div>

                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            <img src={img2} alt="img1" className="img-carrusel"/>
                        </a>
                    </div>

                    <div className="infoCarrusel">
                        <a href="https://coldomotica.com">
                            <img src={img3} alt="img1" className="img-carrusel"/>
                        </a>
                    </div>
                </div>
                
                <div className="controles">
                    <button className="btn-carrusel" onClick={anterior}>
                        <img src={arrow} alt="flechaIzq" className="izquierda"/>
                    </button>
                    <button className="btn-carrusel derecho" onClick={siguiente}>
                        <img src={arrow} alt="flechaDer" className="derechoimg"/>
                    </button>
                </div>

            </div>
        </Fragment>
    );
}
 
export default Carrusel;