import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import MarsLogo from "../../assests/Home/MarsProLogo.png"
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
        <img 
        src={MarsLogo}
        // src="https://s3-alpha-sig.figma.com/img/a7af/c4a4/cd8d4dd080dc60b86f57dfbd6e48c9a5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTULf6QfDZEWJb3-XMNtDu9gXU2B5ntv4O0IiWk7fmfyZQx-nDO7eteNHxNL1PJfp-zCntLaQrPgiR9ep6vBVSYG~3AxZrOPgkxZGZL0TaTooX~ACJIjq4CnmUIHdq9o6WXfb6a~98NWdwO6k7PaiYvOWg1izjUhEyYU8wDLWd-cNbA1MznI1nmFN6GMdnfT6qPBHOyPLvcRTHwCgyAyTs0ETkoE1XeGB7qxrSFwlgmSbpH-G4l3NkHiG3EwWbOs1~k2-uBKZWgTcnKbQdtCnUPWIqgk2eB2hk2C-MDExReUKSka~5bWD8G~GPGL8KryD3FBKbH48H1PKnw6FfOA1Q__" 
        alt="Mars Productio" />
      </div>
      <div className='navbar-links show-menu'>
        <NavLink className={"NavLink"} exact to={'/'}>Home</NavLink>
        <NavLink className={"NavLink"} to={'/aboutus'}>About us</NavLink>
        {/* <NavLink className={"NavLink"} to={'/project'}>Project</NavLink> */}
        {/* <NavLink className={"NavLink"}  to={'/project'}>Project</NavLink> */}
    
        <div>
        
          <a  className='NavLink' href={"/indexTwo.html"} rel="noopener noreferrer">Project</a>
       </div>
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