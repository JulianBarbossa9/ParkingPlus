import React from 'react';
import organigrama from '../images/OrganigramaParking.svg';

const Organigrama = () => {
    return (  
        <div className="col s12">
            <div className="organigrama">
                <div className="container-organigrama">
                    <h4>ORGANIGRAMA</h4>
                    <img src ={organigrama} alt="organigrama" className="img-organigrama"/>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Organigrama;