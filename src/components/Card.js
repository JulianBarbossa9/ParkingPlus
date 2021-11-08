import React from 'react';

const Card = ({title, imageSource, text, item1, item2, item3, alt}) => {
    return (  
        <div className="">
            <div className="card ">
                <div className="card-image">
                    <img src={imageSource} alt={alt}/>
                    <h5 className="card-title" className="center-align">{title}</h5>
                </div>

                <div className="card-content">
                    <p>{text}</p>
                </div>

                <div className="lista">
                    <ul>
                        <li className="lista1">{item1}</li>
                        <li className="lista1">{item2}</li>
                        <li className="lista1">{item3}</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}
 
export default Card;