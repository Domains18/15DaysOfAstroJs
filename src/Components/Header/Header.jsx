import React from 'react'
import { MdNewReleases } from 'react-icons/md';
import { MdSell } from 'react-icons/md';
import { GiFarmer } from 'react-icons/gi';
import { RiBuilding4Fill } from 'react-icons/ri'
import './Header.css'
const Header = () => {
  return (
    <section className='header-section'>
      <div className="right-box">
        <div className="header-right">
          <h1>CATEGORIES</h1>
        </div>
        <div className="categories">
          <p><MdSell className="icon" /><a href='/'>Sell</a></p>
          <p>
            <MdNewReleases className='icon' /><a href="/">Lease</a>
          </p>
          <p><GiFarmer className='icon' /><a href="/">Farms</a></p>
          <p><RiBuilding4Fill className='icon' /><a href="/">Residential</a></p>
        </div>
      </div>
      <div className="left-box">
        <div className="header-right">
          <h1>Hello User</h1>
        </div>
      </div>
    </section>
  );
}

export default Header;