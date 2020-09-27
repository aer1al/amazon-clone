import React, {useState} from 'react'
import './Header.css'
import menu from './images/menu.png'
import logo from './images/logo.png'
import search from  './images/search.png'
import Button from './Button'

function Header() {
{/* ADD STATE FOR MENU DROPDOWN ON MENU CLICK */}

  return (
    <> 
      <div className="header">
        
        {/* MENU BUTTON */}
        <div className="menu__container">
          <img 
            src={menu}
            alt=""
            className="menu__icon"/>
        </div>

        {/* LOGO */}
        <div className="logo__container">
          <img 
            src={logo} 
            alt=""
            className="logo__icon"/>
        </div>

        {/* SEARCH BOX */}
        <div className="search__container">
          <input 
            type="text" 
            className="search__input"/>
          <span className="search__iconContainer">
          <img
            src={search}
            alt=""
            className="search__icon"/>
          </span>
        </div>

        {/* 3 BUTTONS & CHECKOUT */}
        <div className="buttons__container">
          <Button top="Hello, Sign In" bottom="Account & Lists" />
          <Button top="Returns" bottom="& Orders" />
          <Button top="Try" bottom="Prime" />
        </div>
      </div>
    </>
  )
}

export default Header
