import React from "react";
import "./Header.css";
import menuIcon from "./images/menu.png";
import logo from "./images/logo.png";
import search from "./images/search.png";
import Button from "./Button";
import trolley from "./images/trolley.png";
import { Link } from "react-router-dom";

function Header({ toggleMenu }) {
  return (
    <>
      <div className="header">
        {/* MENU BUTTON */}
        <div className="menu__iconContainer" onClick={toggleMenu}>
          <img src={menuIcon} alt="" />
        </div>
        {/* LOGO */}
        <Link to="/">
          <div className="logo__container">
            <img src={logo} alt="" className="logo__icon" />
          </div>
        </Link>
        {/* SEARCH BOX */}
        <div className="search__container">
          <input type="text" className="search__input" />
          <span className="search__iconContainer">
            <img src={search} alt="" className="search__icon" />
          </span>
        </div>
        {/* 3 BUTTONS & CHECKOUT */}
        {/* LOOK TO IMPROVE WITH CSS GRID */}
        <Link to="/login">
          <Button top="Hello, Sign In" bottom="Account & Lists" />
        </Link>
        <Button top="Returns" bottom="& Orders" />
        <Button top="Try" bottom="Prime" />
        <Link to="/checkout">
          <div className="checkout__container">
            <div className="checkout__iconContainer">
              <img src={trolley} alt="" className="checkout__icon" />
            </div>
            <span className="checkout__text">Basket</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
