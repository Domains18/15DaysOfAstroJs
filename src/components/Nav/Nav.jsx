import React from 'react'
import { Link } from 'react-router-dom';
import {togglesFunction} from '../../Controllers/Toggle/Toggle'
import './Nav.css';
const Nav = () => {

  togglesFunction();

  return (
    <article className="navigation">
      <nav className="navLinks">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </nav>
    </article>
  );
}

export default Nav