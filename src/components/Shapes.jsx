import React from 'react'
import { useWindowDimensions } from '../Hooks/ScreenSize';


const Shapes = ({displaceFactor}) => {

    let dimensions=useWindowDimensions();
    let position={x:0,y:0};
    
    //const displaceFactor=1.5;
    const correction=100;
    position.x=Math.abs(dimensions.width-correction-Math.floor(Math.random()*dimensions.width));
    position.y=Math.abs(dimensions.height-correction-Math.floor(Math.random()*dimensions.height))
    +dimensions.height*displaceFactor;
    //position=constrolShapes(position);
    console.log('hola');

    return (
        <div className="circle" style={{transform: `translate(${position.x}px,${position.y}px)`}}>

        </div>
     );
}
 
export default Shapes;