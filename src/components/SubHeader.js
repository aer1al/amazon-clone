import React from "react";
import "./SubHeader.css";
import anchor from "./images/anchor.png";
import Links from "./Links";
import advert from "./images/advert.jpg";

function SubHeader() {
  return (
    <>
      <div className="subHeader">
        {/* LOCATION */}
        <div className="location__container">
          <img src={anchor} alt="" className="location__icon" />
          <div className="location__text">
            <span className="topLine">Hello</span>
            <span className="bottomLine">Select your address</span>
          </div>
        </div>
        {/* SUBHEADER LINKS */}
        <div className="links__container">
          <Links text="Best Sellers" />
          <Links text="Today's Deals" />
          <Links text="Prime Video" />
          <Links text="Customer Service" />
          <Links text="Books" />
          <Links text="New Releases" />
          <Links text="Gift Ideas" />
          <Links text="Home & Garden" />
        </div>
        {/* ADVERT */}
        <img src={advert} alt="" className="advert" />
      </div>
    </>
  );
}

export default SubHeader;
