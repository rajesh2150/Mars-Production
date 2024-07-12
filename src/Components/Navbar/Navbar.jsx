import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-company-title-div'>
        <p className='company-title-p'>Mars Production</p>
      </div>
      <div className='navbar-links show-menu'>
        <NavLink className={"NavLink"} exact to={'/'}>Home</NavLink>
        <NavLink className={"NavLink"} to={'/aboutus'}>About us</NavLink>
        <NavLink className={"NavLink"} to={'/project'}>Project</NavLink>
        <NavLink className={"NavLink"} to={'/partner'}>Partner</NavLink>
        <NavLink className={"NavLink"} to={'/humanonmars'}>Human on Mars</NavLink>
        <NavLink className={"NavLink"} to={'/news'}>News</NavLink>
        <NavLink className={"NavLink"} to={'/technology'}>Technology</NavLink>
      </div>
      <div className='burgermenu' onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-links burger-links ${toggle ? 'show' : ''}`}>
        <NavLink className={"NavLink"} onClick={closeMenu} exact to={'/'}>Home</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/aboutus'}>About us</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/project'}>Project</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/partner'}>Partner</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/humanonmars'}>Human on Mars</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/news'}>News</NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={'/technology'}>Technology</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
