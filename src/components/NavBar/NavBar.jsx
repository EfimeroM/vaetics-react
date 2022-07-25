import React, { useContext, useState } from "react";
import {
  BiMenu,
  BiX,
  BiHome,
  BiBookBookmark,
  BiNews,
  BiGhost,
  BiQuestionMark,
  BiMoon,
  BiSun,
} from "react-icons/bi";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/themes/DarkMode";

export const NavBar = () => {
  const { switchTheme, iconSun } = useContext(DarkMode);
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
      <div className="icon-container-menu" onClick={handleMenu}>
        {menuIsOpen ? <BiX className="icon" /> : <BiMenu className="icon" />}
      </div>
      <div
        className={firstMenu ? "nav-first" : menuIsOpen ? "nav" : "nav-close"}
      >
        <div className="icon-container-theme" onClick={(e) => {switchTheme(e); handleMenu()}}>
          {!iconSun ? <BiSun className="icon" /> : <BiMoon className="icon" />}
        </div>
        <ul>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiHome className="icon" />
            <p>Inicio</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiBookBookmark className="icon" />
            <p>Desafios</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiNews className="icon" />
            <p>Documentacion</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiGhost className="icon" />
            <p>Quiz</p>
          </Link>
          <Link className="li" to={"/"} onClick={handleMenu}>
            <BiQuestionMark className="icon" />
            <p>FAQ</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};
