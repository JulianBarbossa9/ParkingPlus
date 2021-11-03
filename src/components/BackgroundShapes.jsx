import React,{useState} from 'react'
import Shapes from './Shapes';

const BackgroundShapes = ({number,pages}) => {
    return ( 
        <div>
            {number.map(()=>(
                <Shapes
                    displaceFactor={pages[0]}
                />
            ))}
            {number.map(()=>(
                <Shapes
                    displaceFactor={pages[1]}
                />
            ))}
            {number.map(()=>(
                <Shapes
                    displaceFactor={pages[2]}
                />
            ))}
            {number.map(()=>(
                <Shapes
                    displaceFactor={pages[3]}
                />
            ))}
            {number.map(()=>(
                <Shapes
                    displaceFactor={pages[4]}
                />
            ))}
        </div>
     );
}
 
export default BackgroundShapes;