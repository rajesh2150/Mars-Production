import React from 'react'
import "./Navbar.css";
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-company-title-div'>
            <p className='company-title-p'>Mars Production</p>
        </div>
        <div className='navbar-links'>
           <NavLink className={"NavLink"} to={'/'}>Home</NavLink>
           <NavLink className={"NavLink"} to={'/aboutus'}>About us</NavLink>
           <NavLink className={"NavLink"} to={'/project'}>Project</NavLink>
           <NavLink className={"NavLink"} to={'/partner'}>Partner</NavLink>
           <NavLink className={"NavLink"} to={'/humanonmars'}>Human on Mars</NavLink>
           <NavLink className={"NavLink"} to={'/news'}>News</NavLink>
           <NavLink className={"NavLink"} to={'/technology'}>Technology</NavLink>
        </div>
       
      
    </div>
  )
}

export default Navbar