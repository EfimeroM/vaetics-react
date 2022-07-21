import React, { useState } from "react";
import { BiMenu, BiX, BiHome } from "react-icons/bi";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [firstMenu, setFirstMenu] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setFirstMenu(false);
    setMenuIsOpen(!menuIsOpen);
    menuIsOpen
      ? (document.body.style.overflow = "visible")
      : (document.body.style.overflow = "hidden");
  };
  return (
    <div id="nav-bar" className={menuIsOpen ? "nav-bar" : ""}>
      <div className="icon-container" onClick={handleMenu}>
        {menuIsOpen ? <BiX className="icon" /> : <BiMenu className="icon" />}
      </div>
      <div
        className={firstMenu ? "nav-first" : menuIsOpen ? "nav" : "nav-close"}
      >
        <ul>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiHome className="icon" />
            <p>Home</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiHome className="icon" />
            <p>Home</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiHome className="icon" />
            <p>Home</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiHome className="icon" />
            <p>Home</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};
