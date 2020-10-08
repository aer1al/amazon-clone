import React from "react";
import "./Menu.css";
import avatar from "./images/avatar.png";

function Menu({ menuState }) {
  return (
    <>
      <div className={menuState ? "menu__container active" : "menu__container"}>
        <div className="menu__login">
          <img src={avatar} alt="" className="menu__icon"></img>
          <p className="login__text">Hello, Sign In</p>
        </div>
        <div className="menu__list">
          <h1>hi</h1>
        </div>
      </div>
    </>
  );
}

export default Menu;
