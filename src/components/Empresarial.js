import React,{Fragment} from 'react';
import nave from './../images/Logo/Recurso3.png';
import texto from './../images/Logo/Recurso4.png';
import plus from './../images/Logo/Recurso5.png';
import {useMousePosition} from '../Hooks/MousePosition';
import { useWindowDimensions } from '../Hooks/ScreenSize';





const Empresarial = () => {


    let dimensions=useWindowDimensions();
    let position;

    position=useMousePosition();

    position.x= (position.x-dimensions.width/4);
    position.y= (position.y-dimensions.height/2);

    return (  
        <Fragment>
            <div className="col s12 m12 l6">
                <div className="img-empre fullh">
                    <h3>Imagen Empresarial</h3>
                    <div className="img">
                        <img src={nave} alt = "logoParking" style={{transform: `translate(${position.x/17}px,${position.y/17}px)`}}  className="imgLogo"/>
                        <img src={texto} alt = "logoParking" style={{transform: `translate(${position.x/30}px,${position.y/30}px)`}} className="imgLogo" />
                        <img src={plus} alt = "logoParking" style={{transform: `translate(${position.x/20}px,${position.y/20}px)`}} className="imgLogo" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Empresarial;