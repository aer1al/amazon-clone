import React from "react";
import "./Button.css";

function Button({ top, bottom }) {
  return (
    <>
      <div className="button__container">
        <span className="top">{top}</span>
        <span className="bottom">{bottom}</span>
      </div>
    </>
  );
}

export default Button;
