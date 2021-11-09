import React from 'react'
import Shapes from './Shapes';

const BackgroundShapes = ({number,pages}) => {
    return ( 
        <div>
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[0]}
                />
            ))}
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[1]}
                />
            ))}
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[2]}
                />
            ))}
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[3]}
                />
            ))}
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[4]}
                />
            ))}
            {number.map((index)=>(
                <Shapes
                key={index}
                    displaceFactor={pages[5]}
                />
            ))}
        </div>
     );
}
 
export default BackgroundShapes;