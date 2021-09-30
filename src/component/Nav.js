import React from 'react';
import './Nav.css';

import { NavLink } from 'react-router-dom';
import { isBrowser, isTablet } from 'react-device-detect';

const requireImage = path => {
    try {
        return require(`../img/${path}`).default;
    } catch (err) {
        console.log(err);
        // return require('../img/default.jpeg').default;
    }
}

function Nav() {

    var cta;

    if (isTablet || isBrowser) {
        cta = (
            <li className='cta-el'>
                
                <a href="mailto:lucasfrech@hotmail.fr" className='cta'>Me contacter</a>
            </li>);
    }

    return (
        <nav className="main-nav">
            <ul>
                <li className='logo'>
                    <NavLink exact to='/'>
                        <img src={requireImage('logo.png')} alt='' aria-hidden='true' />
                        <h2>Lucas Frech</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects' activeClassName='active' >
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/about' activeClassName='active' >
                        A propos
                    </NavLink>
                </li>
                {cta}
            </ul>
        </nav>
    );
}

export default Nav;