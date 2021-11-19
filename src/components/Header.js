import React, {Fragment} from 'react';
import logo from '../images/parkin1.png';


const Header = () => {
    return ( 
        <Fragment>
            <div  className="navCont">
                <div>
                    <a href="!#" className = "mainLogo brand-logo">
                        <img src={logo} alt="logoParking +"  className="logoHeader"/>
                    </a> 
                </div>
                <nav  className="nav">
                    
                    <div className="nav-wrapper">                   
                        <a href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="nav-menu">
                            <li className="nav-menu-item">
                                <a href="!#"className="nav-menu-link nav-link">Nosotros</a>
                            </li>
                            <li className="nav-menu-item">
                                <a href="https://github.com/JulianBarbossa9"className="nav-menu-link nav-link">Información</a>
                            </li>
                            <li className="nav-menu-item">
                                <a href="https://calcularhoraparqueadero.netlify.app"className="nav-menu-link nav-link">Cotización</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Nosotros</a></li>
                <li><a href="badges.html">Informacion</a></li>
                <li><a href="collapsible.html">Contacto</a></li>
            </ul>

        </Fragment>
     );
}
 
export default Header;
