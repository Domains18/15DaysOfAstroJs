import React from 'react';
import togglesFunction from '../../Controllers/Toggle/Toggle';
import './Nav.css';
const Nav = () => {


    togglesFunction();

  return (
    <nav className="Navigation">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#COntact Us">Contacts</a></li>
            <li><a href="#Gategories">Portfolio</a></li>
        </ul>
    </nav>
  )
}

export default Nav