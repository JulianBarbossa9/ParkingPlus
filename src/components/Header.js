import React, {Fragment} from 'react';

const Header = () => {
    return ( 
        <Fragment>
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <a href="#"className="nav-menu-link nav-link">Nosotros</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#"className="nav-menu-link nav-link">Información</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#"className="nav-menu-link nav-link">Contacto</a>
                    </li>
                </ul>
            </nav>

        </Fragment>
     );
}
 
export default Header;
