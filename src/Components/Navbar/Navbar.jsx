import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MarsLogo from "../../assests/Home/MarsProLogo.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-company-title-div">
        <img src={MarsLogo} alt="Mars Productio" />
      </div>
      <div className="navbar-links show-menu">
        <NavLink className={"NavLink"} exact to={"/"}>
          Home
        </NavLink>
        <NavLink className={"NavLink"} to={"/aboutus"}>
          About us
        </NavLink>
        {/* <NavLink className={"NavLink"} to={'/project'}>Project</NavLink> */}
        {/* <NavLink className={"NavLink"}  to={'/project'}>Project</NavLink> */}

        <div>
          <a
            className="NavLink"
            href={"/indexTwo.html"}
            rel="noopener noreferrer"
          >
            Talkies
          </a>
        </div>
        <NavLink className={"NavLink"} to={"/partner"}>
          Partners
        </NavLink>
        <NavLink className={"NavLink"} to={"/technology"}>
          Technology
        </NavLink>
        <NavLink className={"NavLink"} to={"/humanonmars"}>
          Humans
        </NavLink>
        <NavLink className={"NavLink"} to={"/news"}>
          News
        </NavLink>
      </div>
      <div className="burgermenu" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-links burger-links ${toggle ? "show" : ""}`}>
        <NavLink className={"NavLink"} onClick={closeMenu} exact to={"/"}>
          Home
        </NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={"/aboutus"}>
          About us
        </NavLink>
        {/* <NavLink className={"NavLink"} onClick={closeMenu} to={'/project'}>Project</NavLink> */}
        <div>
          <a
            className="NavLink"
            href={"/indexTwo.html"}
            rel="noopener noreferrer"
          >
            Talkies
          </a>
        </div>
        <NavLink className={"NavLink"} onClick={closeMenu} to={"/partner"}>
          Partners
        </NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={"/technology"}>
          Technology
        </NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={"/humanonmars"}>
          Humans
        </NavLink>
        <NavLink className={"NavLink"} onClick={closeMenu} to={"/news"}>
          News
        </NavLink>
   
      </div>
    </div>
  );
};

export default Navbar;
