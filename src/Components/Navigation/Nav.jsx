import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Nav.css'
const Nav = () => {
  return (
    <section className='NavSection'>
        <div className='right-content'>
            <button className='logo'>LOGO</button>
            <button className='home'>HOME</button>
        </div>
        <div className="center-content">
          <input className='search-bar' placeholder='I am searching for....'/>
          <AiOutlineSearch className='search-icon'/>
          <div className="line"></div>
        </div>
        <div className="center-left">
          <button className='list-button'>List Property</button>
        </div>
        <div className="left-content">
          <button className='signup'>SignUp</button>
          <button className='login'>LogIn</button>
        </div>
    </section>
  )
}

export default Nav