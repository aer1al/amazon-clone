import React from "react";
import "./Product.css";

function Product({ title, imageURL }) {
  return (
    <>
      <div className="product__container">
        <p className="product__header">{title}</p>
        <img src={imageURL} alt="" className="product__image" />
        <p className="product__footer">See more</p>
      </div>
    </>
  );
}

export default Product;
